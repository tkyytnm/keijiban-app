import "./App.css";
import { Routes, Route } from "react-router-dom";
import Threads from "../features/threads/Threads.js";
import Thread from "../features/thread/Thread.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>掲示板 App</h1>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Threads />} />
          <Route path=":threadId" element={<Thread />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
