import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/characters">Przejdź do Characters</Link>
        </li>
      </ul>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Navigation />
      <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
