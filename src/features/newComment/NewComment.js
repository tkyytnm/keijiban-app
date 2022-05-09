import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCommentData, selectIsLoading } from "./newCommentSlice";
import { selectUser } from "../auth/authSlice";
import { useParams } from "react-router-dom";
import { fetchCommentsByThread } from "../comments/commentsSlice";

function Comment() {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      sendCommentData({
        body,
        thread_id: params.threadId,
        user_id: user.id,
      })
    ).unwrap();
    dispatch(fetchCommentsByThread(response.thread_id));
    setBody("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            id="body"
            name="body"
            rows="10"
            cols="50"
            onChange={(e) => setBody(e.target.value)}
            required
            value={body}
            placeholder="新規コメント"
          />
        </div>
        <div>
          <button disabled={isLoading}>投稿する</button>
        </div>
      </form>
    </>
  );
}

export default Comment;
