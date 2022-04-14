import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectThreads, fetchThreads } from "./threadsSlice";

function Threads() {
  const dispatch = useDispatch();
  const threads = useSelector(selectThreads);

  useEffect(() => {
    dispatch(fetchThreads());
  }, [dispatch]);

  return (
    <ul>
      {threads.map((thread) => {
        return (
          <li key={thread.id}>
            {thread.id} <a href={"/thread/" + thread.id}>{thread.title}</a>{" "}
            {thread.user_id} {thread.created_at}
          </li>
        );
      })}
    </ul>
  );
}

export default Threads;
