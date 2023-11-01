import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Login/Login";
import Component from "./Component/Component";
import Signup from "./Newuser/Signup";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Component/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App;