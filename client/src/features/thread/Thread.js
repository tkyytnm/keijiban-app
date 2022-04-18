import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/Comments.js";
import Comment from "../comment/Comment.js";
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
      <h1>{isLoading ? <Skeleton /> : thread.title}</h1>
      <Comments threadId={threadId} />
      <Comment />
    </>
  );
}

export default Thread;
