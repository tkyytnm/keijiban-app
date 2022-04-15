import { configureStore } from "@reduxjs/toolkit";
import threads from "../features/threads/threadsSlice";
import thread from "../features/thread/threadSlice";
import comments from "../features/comments/commentsSlice.js";

const reducer = {
  threads,
  thread,
  comments,
};

export default configureStore({ reducer });
