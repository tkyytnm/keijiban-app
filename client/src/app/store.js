import { configureStore } from "@reduxjs/toolkit";
import threads from "../features/threads/threadsSlice";
import thread from "../features/thread/threadSlice";
import newThread from "../features/newThread/newThreadSlice";
import comments from "../features/comments/commentsSlice";
import newComment from "../features/newComment/newCommentSlice";
import auth from "../features/auth/authSlice";
import user from "../features/user/userSlice";
import flashMessage from "../common/header/flashMessageSlice";
import { loadState, saveState } from "./localStorage";

const reducer = {
  threads,
  thread,
  newThread,
  comments,
  newComment,
  auth,
  user,
  flashMessage,
};

const persistedState = loadState();

const store = configureStore({ reducer, preloadedState: persistedState });

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export default store;
