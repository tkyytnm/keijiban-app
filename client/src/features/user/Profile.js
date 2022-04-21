import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProfile,
  changePassword,
  deleteUser,
  selectIsLoading,
} from "./userSlice";
import { selectUser, fetchUserData, logout } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    dispatch(
      changeProfile({
        username,
        email,
        email_old: user.email,
        id: user.id,
      })
    )
      .unwrap()
      .then((res) => {
        dispatch(fetchUserData(res.id));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    dispatch(
      changePassword({
        id: user.id,
        password,
      })
    );
  };

  const handleClickDeleteUser = () => {
    if (window.confirm("本当に退会しますか？")) {
      dispatch(deleteUser(user.id))
        .then(dispatch(logout()))
        .then(navigate("/"));
    }
  };

  return (
    <>
      <h2>Profile</h2>
      <h3>ユーザー情報変更</h3>
      <form onClick={handleSubmitProfile}>
        <div>
          <label htmlFor="username">ユーザー名</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            maxLength="100"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">emailアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength="100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button disabled={isLoading}>変更する</button>
        </div>
      </form>
      <h3>パスワード変更</h3>
      <form onSubmit={handleSubmitPassword}>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            maxLength="100"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button disabled={isLoading}>変更する</button>
        </div>
      </form>
      <h3>退会</h3>
      <p className="resign">退会すると、作成したスレッドやコメントが全て削除されます。</p>
      <button onClick={handleClickDeleteUser} className="single">
        退会する
      </button>
    </>
  );
}

export default Profile;
