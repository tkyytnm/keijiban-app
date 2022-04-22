import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/Comments.js";
import NewComment from "../newComment/NewComment.js";
import { fetchThreadById, selectThread, selectIsLoading } from "./threadSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { selectUser } from "../auth/authSlice";

function Thread() {
  const params = useParams();
  const threadId = params.threadId;
  const dispatch = useDispatch();
  const thread = useSelector(selectThread);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchThreadById(threadId));
  }, [dispatch, threadId]);

  return (
    <>
      <h2>{isLoading ? <Skeleton height={28} /> : thread.title}</h2>
      <Comments threadId={threadId} />
      {user.id ? <NewComment /> : <p>＞ コメントするには<Link to="/login">ログイン</Link>もしくは<Link to="/register">ユーザー登録</Link>が必要です。</p>}
    </>
  );
}

export default Thread;
