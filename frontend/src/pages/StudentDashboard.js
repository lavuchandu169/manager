import React, { useEffect, useState } from "react";
import "../components/Card.css";
import "../pages/StudentDashboard.css";
import { fetchAssignments } from "../services/api"; // Use the imported function

const StudentDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null); // To handle and display errors

  useEffect(() => {
    const loadAssignments = async () => {
      try {
        const data = await fetchAssignments(); // Use the imported API function
        setAssignments(data);
      } catch (err) {
        setError("Failed to fetch assignments. Please try again later.");
        console.error(err); // Log the error for debugging
      }
    };

    loadAssignments();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="container">
      <h1>Your Assignments</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.fileName}</td>
              <td>{assignment.deadline}</td>
              <td>{assignment.status}</td>
              <td>
                {assignment.status === "Completed" ? (
                  <a href={assignment.completedFileUrl} download>
                    Download
                  </a>
                ) : (
                  "Not Available"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;