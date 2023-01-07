import "./App.css";
import { Lists, MyNav, Home,AddBonus } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/addBonus" element={<AddBonus />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
