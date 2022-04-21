import "./Menu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice.js";
import { BiUserCircle} from 'react-icons/bi';

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
          <Link to="register">ユーザー登録</Link>
        </>
      )}

      {user.id ? <Link to="profile"><BiUserCircle /> {user.username}</Link> : "未ログイン"}
    </nav>
  );
}

export default Menu;
