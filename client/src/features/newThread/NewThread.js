import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendThreadData } from "./newThreadSlice";
import { selectUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

function NewThread() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      sendThreadData({ title, user_id: user.id })
    ).unwrap();

    navigate(`/thread/${response.id}`);
  };

  return (
    <>
      <h1>新規スレッド作成</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="作成" />
        </div>
      </form>
    </>
  );
}

export default NewThread;
