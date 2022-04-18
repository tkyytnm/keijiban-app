import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectComments,
  fetchCommentsByThread,
  selectIsLoading,
} from "./commentsSlice.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Comments({ threadId }) {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByThread(threadId));
  }, [dispatch, threadId]);


  if (isLoading) {
    return <Skeleton count={10} />;
  }

  return (
    <>
      <div>Comments</div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.comment_num}: {comment.body} {comment.user_id}{" "}
              {comment.created_at}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
