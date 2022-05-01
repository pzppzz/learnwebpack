import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Home from "pages/Home";
import About from "pages/About";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>底部</div>
    </BrowserRouter>
  )
}
export default App