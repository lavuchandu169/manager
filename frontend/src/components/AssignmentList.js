import React from "react";
import '../components/Card.css';

const AssignmentList = ({ assignments }) => {
  return (
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
              {assignment.status === "Completed" && (
                <a href={assignment.completedFileUrl} download>
                  Download
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssignmentList;