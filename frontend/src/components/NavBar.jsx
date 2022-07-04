import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      {user && <p>{user?.email}</p>}
      <ul>
        {user ? (
          <>
            {user.role === "ROLE_ADMIN" && (
              <li>
                <Link to='/users'>Users</Link>
              </li>
            )}
            <li>
              <Link to='/logout'>Disconnect</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
