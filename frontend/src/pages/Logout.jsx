import { toast } from "react-toastify";
import { logout } from "../services/Api";

function Logout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    logout()
      .then(() => {
        localStorage.setItem("user", null);
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
