import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendThreadData, selectIsLoading } from "./newThreadSlice";
import { selectUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { setFlashMessage } from "../../common/header/flashMessageSlice";

function NewThread() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendThreadData({ title, user_id: user.id }))
      .unwrap()
      .then((res) => {
        dispatch(setFlashMessage("新しいスレッドを作成しました。"));
        navigate(`/thread/${res.id}`);
      });
  };

  return (
    <>
      <h2>新規スレッド作成</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">タイトル : </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            maxLength="50"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <button disabled={isLoading}>作成</button>
        </div>
      </form>
    </>
  );
}

export default NewThread;
