import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectThreads, fetchThreads, selectIsLoading } from "./threadsSlice";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Threads() {
  const dispatch = useDispatch();
  const threads = useSelector(selectThreads);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchThreads());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton count={10} />;
  }

  return (
    <ul id="threads">
      {threads.map((thread) => {
        const date = new Date(thread.created_at);
        return (
          <li key={thread.id}>
            <div className="sub">
              <span>{thread.id}.</span> <span>作成者 : {thread.username}</span>{" "}
              <span>
                作成日時 : {date.getFullYear()}年{date.getMonth() + 1}月
                {date.getDate()}日{date.getHours()}時{date.getMinutes()}分
                {date.getSeconds()}秒
              </span>
            </div>
            <div className="main">
              <Link to={"thread/" + thread.id}>{thread.title}</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Threads;
