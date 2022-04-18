import { configureStore } from "@reduxjs/toolkit";
import threads from "../features/threads/threadsSlice";
import thread from "../features/thread/threadSlice";
import newThread from "../features/newThread/newThreadSlice";
import comments from "../features/comments/commentsSlice";
import auth from "../features/auth/authSlice";

const reducer = {
  threads,
  thread,
  newThread,
  comments,
  auth,
};

export default configureStore({ reducer });
