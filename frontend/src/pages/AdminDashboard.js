import React, { useEffect, useState } from "react";
import axios from "axios";
import '../components/Card.css';
import "../pages/AdminDashboard.css";

const AdminDashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const response = await axios.get("/api/admin/assignments");
      setAssignments(response.data);
    };
    fetchAssignments();
  }, []);

  const markAsCompleted = async (id) => {
    try {
      await axios.post(`/api/admin/assignments/${id}/complete`);
      alert("Assignment marked as completed!");
    } catch (error) {
      alert("Error updating status");
    }
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Deadline</th>
            <th>Student</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.fileName}</td>
              <td>{assignment.deadline}</td>
              <td>{assignment.studentName}</td>
              <td>{assignment.status}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => markAsCompleted(assignment.id)}
                >
                  Mark as Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;