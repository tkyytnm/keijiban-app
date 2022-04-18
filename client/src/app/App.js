import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header.js";
import Threads from "../features/threads/Threads.js";
import Thread from "../features/thread/Thread.js";
import NewThread from "../features/newThread/NewThread.js";
import Login from "../features/auth/Login.js";
import Logout from "../features/auth/Logout.js";
import Register from "../features/auth/Register.js";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Threads />} />
          <Route path="new-thread" element={<NewThread />} />
          <Route path="thread/:threadId" element={<Thread />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;