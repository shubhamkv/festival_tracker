import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Festival } from "./pages/Festival";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/festival" element={<Festival />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
