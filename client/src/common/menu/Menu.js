import "./Menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice.js";

function Menu() {
  const user = useSelector(selectUser);

  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      <div>スレッド作成</div>
      <Link to="login">ログイン</Link>
      <div>新規登録</div>
      <Link to="logout">ログアウト</Link>
      {user.id ? user.username : "未ログイン"}
    </nav>
  );
}

export default Menu;
