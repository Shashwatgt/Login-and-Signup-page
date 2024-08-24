import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/chatpage";
import axios from "axios";
import chatpage from "./Pages/chatpage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} exact />
        <Route path="/chats" Component={chatpage} />
      </Routes>
    </div>
  );
}

export default App;
