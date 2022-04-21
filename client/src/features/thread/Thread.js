import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/Comments.js";
import NewComment from "../newComment/NewComment.js";
import { fetchThreadById, selectThread, selectIsLoading } from "./threadSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Thread() {
  const params = useParams();
  const threadId = params.threadId;
  const dispatch = useDispatch();
  const thread = useSelector(selectThread);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchThreadById(threadId));
  }, [dispatch, threadId]);

  return (
    <>
      <h2>{isLoading ? <Skeleton /> : thread.title}</h2>
      <Comments threadId={threadId} />
      <NewComment />
    </>
  );
}

export default Thread;
