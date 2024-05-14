import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CreateEmployFrom from "./Pages/CreateEmployForm/CreateEmployFrom";
import Update from "./Pages/Update/Update";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeeFrom" element={<CreateEmployFrom />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
