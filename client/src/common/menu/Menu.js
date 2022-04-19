import "./Menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice.js";

function Menu() {
  const user = useSelector(selectUser);

  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      {user.id ? (
        <>
          <Link to="new-thread">新規スレッド作成</Link>{" "}
          <Link to="logout">ログアウト</Link>
        </>
      ) : (
        <>
          <Link to="login">ログイン</Link>
          <Link to="register">新規登録</Link>
        </>
      )}

      {user.id ? <Link to="profile">{user.username}</Link> : "未ログイン"}
    </nav>
  );
}

export default Menu;
