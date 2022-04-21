import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectComments,
  fetchCommentsByThread,
  selectIsLoading,
  deleteCommentById,
} from "./commentsSlice.js";
import { selectUser } from "../auth/authSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Comments({ threadId }) {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  const handleDeleteButton = (id, user_id) => {
    if (user.id === user_id) {
      dispatch(deleteCommentById(id)).then(
        dispatch(fetchCommentsByThread(threadId))
      );
    }
  };

  useEffect(() => {
    dispatch(fetchCommentsByThread(threadId));
  }, [dispatch, threadId]);

  if (isLoading) {
    return <Skeleton count={10} />;
  }

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <div className="sub">
              {comment.comment_num}. 投稿者:{comment.username} 投稿日時:
              {comment.created_at}
              {user.id === comment.user_id ? (
                <button
                  onClick={() =>
                    handleDeleteButton(comment.id, comment.user_id)
                  }
                >
                  x
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="main">{comment.body}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
