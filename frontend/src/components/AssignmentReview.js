import React, { useState } from "react";

const AssignmentReview = ({ assignment, onSubmitReview }) => {
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    onSubmitReview(assignment.id, review);
  };

  return (
    <div>
      <h2>Review Assignment: {assignment.fileName}</h2>
      <textarea
        className="form-control"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  );
};

export default AssignmentReview;