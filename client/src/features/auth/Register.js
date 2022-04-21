import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRegisterData, selectIsLoading } from "./authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      sendRegisterData({
        username,
        email,
        password,
      })
    ).unwrap();
    if (response.id) {
      navigate("/");
    }
    setErrorMessage(response.message);
  };

  return (
    <>
      <h2>ユーザー登録</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">ユーザー名</label>
          <input
            type="username"
            name="username"
            id="username"
            required
            maxLength="100"
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
            maxLength="100"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            maxLength="100"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <button disabled={isLoading}>新規登録</button>
        </div>
      </form>
    </>
  );
}

export default Register;
