import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize Toastify
toast.configure();

const Notification = {
  // Success notification
  success: (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto close after 3 seconds
    });
  },

  // Error notification
  error: (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  },

  // Info notification
  info: (message) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  },

  // Warning notification
  warning: (message) => {
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  },
};

export default Notification;