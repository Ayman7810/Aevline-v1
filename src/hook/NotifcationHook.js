
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const notify = (msg, type) => {
  if (type === "success") {
    toast.success(msg);
  }

  if (type === "error") {
    toast.error(msg);
  }
  if (type === "warn") {
    toast.warn(msg, );
  }
};

export default notify