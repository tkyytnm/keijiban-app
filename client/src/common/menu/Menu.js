import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice.js";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Menu() {
  const user = useSelector(selectUser);
  const [showMenu, setShowMenu] = useState("");

  const handleShowMenu = () => {
    if (showMenu === "on") {
      setShowMenu("");
    } else {
      setShowMenu("on");
    }
  };

  return (
    <>
      <HiOutlineMenuAlt2 id="ham-btn" onClick={handleShowMenu} />
      <nav id="menu" className={showMenu}>
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

        {user.id && (
          <Link to="profile">
            <BiUserCircle /> {user.username}
          </Link>
        )}
      </nav>
    </>
  );
}

export default Menu;
