import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/Comments.js";
import { fetchThreadById, selectThread } from "./threadSlice";

function Thread() {
  const params = useParams();
  const id = params.threadId;
  const dispatch = useDispatch();
  const thread = useSelector(selectThread);

  useEffect(() => {
    dispatch(fetchThreadById(id));
  }, [dispatch, id]);

  console.log(thread)

  return (
    <>
      <h1>{thread.title}</h1>
      <Comments />
    </>
  );
}

export default Thread;
