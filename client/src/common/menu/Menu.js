import "./Menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice.js";

function Menu() {
  const user = useSelector(selectUser);

  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      <Link to="new-thread">新規スレッド作成</Link>
      <Link to="login">ログイン</Link>
      <Link to="register">新規登録</Link>
      <Link to="logout">ログアウト</Link>
      {user.id ? user.username : "未ログイン"}
    </nav>
  );
}

export default Menu;
