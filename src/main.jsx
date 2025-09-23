import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./scss/main.css";

import Home from "./components/Home";
import Mobs from "./components/Mobs";
import Items from "./components/Items";
import Blocks from "./components/Blocks";
import Game from "./components/Game";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/mobs">Mobs</Link>
        </li>
        <li>
          <Link to="/blocks">Blocks</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
      </ul>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter basename="/MinecraftAPI">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobs" element={<Mobs />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/items" element={<Items />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
