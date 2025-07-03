import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/NavBar";
import Hero from "./assets/Hero";
import FooterBanner from "./assets/FooterBanner";
import Footer from "./assets/Footer";
import TextEditor from "./assets/TextEditor";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Hero />
              <FooterBanner />
              <Footer />
            </>
          }
        />
        <Route path="/editor" element={<TextEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
