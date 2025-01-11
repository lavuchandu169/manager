import React, { useState } from "react";
import axios from "axios";
import '../components/Form.css';

const AssignmentUpload = () => {
  const [file, setFile] = useState(null);
  const [deadline, setDeadline] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("deadline", deadline);

    try {
      await axios.post("/api/assignments", formData);
      alert("Assignment uploaded successfully!");
    } catch (error) {
      alert("Error uploading assignment");
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <div className="mb-3">
        <label className="form-label">Upload PDF</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Deadline</label>
        <input
          type="date"
          className="form-control"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Upload
      </button>
    </form>
  );
};

export default AssignmentUpload;