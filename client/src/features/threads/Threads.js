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
    <ul>
      {threads.map((thread) => {
        return (
          <li key={thread.id}>
            {thread.id} <Link to={"thread/" + thread.id}>{thread.title}</Link>{" "}
            {thread.username} {thread.created_at}
          </li>
        );
      })}
    </ul>
  );
}

export default Threads;
