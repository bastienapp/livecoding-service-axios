import axios from "axios";
import { toast } from "react-toastify";

function Logout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        toast("Successfully logged out");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast("You're not authenticated");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign out</h1>
      <input type='submit' value='Disconnect' />
    </form>
  );
}

export default Logout;
