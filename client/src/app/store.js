import { configureStore } from "@reduxjs/toolkit";
import threads from "../features/threads/threadsSlice";
import thread from "../features/thread/threadSlice";

const reducer = {
  threads,
  thread,
};

const store = configureStore({ reducer });
export default store;
