import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRegisterData } from "./authSlice";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendRegisterData({
        username,
        email,
        password,
      })
    );
  };

  return (
    <>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Register" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
}

export default Register;
