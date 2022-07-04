import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getUsers } from "../services/Api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast("You're not authenticated");
        }
        if (err.response.status === 403) {
          toast("You're not authorized");
        }
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Email: {user.email} - Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
