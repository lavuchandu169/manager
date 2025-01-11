import axios from "axios";

// Base URL for the backend API
const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend's base URL

// Axios instance for reusable configurations
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all assignments (GET)
export const fetchAssignments = async () => {
  try {
    const response = await apiClient.get("/assignments");
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error.message);
    throw error; // Propagate the error for the caller to handle
  }
};

// Submit a new assignment (POST)
export const submitAssignment = async (assignmentData) => {
  try {
    const response = await apiClient.post("/assignments", assignmentData);
    return response.data;
  } catch (error) {
    console.error("Error submitting assignment:", error.message);
    throw error;
  }
};

// Fetch assignment details by ID (GET)
export const fetchAssignmentById = async (assignmentId) => {
  try {
    const response = await apiClient.get(`/assignments/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching assignment ${assignmentId}:`, error.message);
    throw error;
  }
};

// Update assignment status (PUT)
export const updateAssignmentStatus = async (assignmentId, status) => {
  try {
    const response = await apiClient.put(`/assignments/${assignmentId}`, { status });
    return response.data;
  } catch (error) {
    console.error(`Error updating assignment ${assignmentId}:`, error.message);
    throw error;
  }
};

// Delete an assignment (DELETE)
export const deleteAssignment = async (assignmentId) => {
  try {
    const response = await apiClient.delete(`/assignments/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting assignment ${assignmentId}:`, error.message);
    throw error;
  }
};