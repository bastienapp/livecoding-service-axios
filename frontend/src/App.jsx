import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Logout from "./pages/Logout";
import NavBar from "./components/NavBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className='app'>
          <NavBar />

          <Routes>
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
