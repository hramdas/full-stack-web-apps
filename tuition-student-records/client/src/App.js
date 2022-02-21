import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Student } from "./components/Student/Student";
import { StudentList } from "./components/Student/StudentList";
import { Test } from "./components/Tests/Test";
import { TestList } from "./components/Tests/TestList";

function App() {
  return (
    <div className="App">
      <Header />
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
