import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/NavBar"
import Hero from "./assets/Hero"
import Content from "./assets/Content"
import Content2 from "./assets/Content2"
import FooterBanner from "./assets/FooterBanner"
import Footer from "./assets/Footer"
import TextEditor from "./assets/TextEditor"

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Content />
      <Content2 />
      <FooterBanner />
      <Router>
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/editor" element={<TextEditor />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
