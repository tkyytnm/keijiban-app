import { useDispatch } from "react-redux";
import { logout } from "./authSlice.js";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1>Logout</h1>
      <button onClick={() => dispatch(logout()).then(navigate("/"))}>
        ログアウト
      </button>
    </>
  );
}

export default Logout;
