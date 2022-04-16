import { configureStore } from "@reduxjs/toolkit";
import threads from "../features/threads/threadsSlice";
import thread from "../features/thread/threadSlice";
import comments from "../features/comments/commentsSlice.js";
import auth from "../features/auth/authSlice.js";

const reducer = {
  threads,
  thread,
  comments,
  auth,
};

export default configureStore({ reducer });
