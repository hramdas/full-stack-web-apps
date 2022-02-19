import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Student } from "./components/Student";
import { StudentList } from "./components/StudentList";
import { Test } from "./components/Test";
import { TestList } from "./components/TestList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/tests" element={<TestList />} />
      </Routes>
    </div>
  );
}

export default App;
