import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../common/header/Header.js";
import Threads from "../features/threads/Threads.js";
import Thread from "../features/thread/Thread.js";
import Login from '../features/auth/Login.js'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Threads />} />
          <Route path="thread:threadId" element={<Thread />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
