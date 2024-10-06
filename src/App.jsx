import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Speakers from "./components/Speakers/Speakers";
import Sponsers from "./components/Sponsers/Sponsers";
import Partners from "./components/Partners/Partners";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
