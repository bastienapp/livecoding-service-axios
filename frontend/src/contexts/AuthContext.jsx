import { createContext } from "react";

export const AuthContext = createContext(null);

import React, { useState } from "react";

function AuthContextProvider(props) {
  const { children } = props;
  const initialValue = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(initialValue);
  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
