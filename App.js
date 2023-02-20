import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./src/components/About";
import Home from "./src/screens/Home";
import Skills from "./src/screens/Skills";
import Projects from "./src/screens/Projects";

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
