import { useState } from "react";
import { selectUser, sendLoginData } from "./authSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendLoginData({ username: email, password }));
  };

  return (
    <>
      <h1>Login</h1>
      <form>
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
          <input type="submit" value="Login" onClick={handleSubmit} />
        </div>
      </form>
      {user.id ? user.username + "でログイン中" : "未ログイン"}
    </>
  );
}

export default Login;