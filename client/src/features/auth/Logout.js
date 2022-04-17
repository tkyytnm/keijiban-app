import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice.js";

function Logout() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Logout</h1>
      <button onClick={() => dispatch(logout())}>ログアウト</button>
    </>
  );
}

export default Logout;
