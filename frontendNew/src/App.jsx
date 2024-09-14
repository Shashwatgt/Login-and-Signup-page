import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} exact />
      </Routes>
    </div>
  );
}

export default App;
