import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../services/Api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      login(email, password)
        .then((data) => {
          const user = { email: data.email, role: data.role };
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          toast("Successfully logged in");
        })
        .catch((err) => {
          toast(err.response.data.error);
        });
    } else {
      toast("Please specify both email and password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <label htmlFor='email'>
        Email:
        <input
          type='email'
          name='email'
          id='email'
          placeholder='test@blabla.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          name='password'
          id='password'
          placeholder='***********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <input type='submit' value='Login' />
    </form>
  );
}

export default Login;
