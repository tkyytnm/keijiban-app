import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/Comments.js";
import NewComment from "../newComment/NewComment.js";
import {
  fetchThreadById,
  deleteThreadById,
  selectThread,
  selectIsLoading,
} from "./threadSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { selectUser } from "../auth/authSlice";
import { setFlashMessage } from "../../common/header/flashMessageSlice";

function Thread() {
  const params = useParams();
  const threadId = params.threadId;
  const dispatch = useDispatch();
  const thread = useSelector(selectThread);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchThreadById(threadId));
  }, [dispatch, threadId]);

  const handleDeleteButton = (id, user_id) => {
    if (user.id === user_id) {
      if (window.confirm("本当にこのスレッドを削除しますか？")) {
        dispatch(deleteThreadById(id)).then(() => {
          dispatch(setFlashMessage("スレッドを削除しました。"));
          navigate("/");
        });
      }
    }
  };

  return (
    <>
      <h2>{isLoading ? <Skeleton height={28} /> : thread.title}</h2>
      <Comments threadId={threadId} />
      {user.id ? (
        <NewComment />
      ) : (
        <p>
          ＞ コメントするには<Link to="/login">ログイン</Link>もしくは
          <Link to="/register">ユーザー登録</Link>が必要です。
        </p>
      )}
      {user.id === thread.user_id ? (
        <button
          className="single"
          onClick={() => handleDeleteButton(thread.id, thread.user_id)}
        >
          このスレッドを削除する
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default Thread;
