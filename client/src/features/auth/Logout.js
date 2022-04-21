import { useDispatch } from "react-redux";
import { logout } from "./authSlice.js";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h2>ログアウト</h2>
      <button
        onClick={() => dispatch(logout()).then(navigate("/"))}
        className="single"
      >
        ログアウトする
      </button>
    </>
  );
}

export default Logout;
