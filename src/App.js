import { Routes, Route } from "react-router-dom";
import EmployeList from "./pages/employeList/EmployeList";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/employee-list" element={<EmployeList/>}/>
        </Routes>
    </div>
  );
}

export default App;
