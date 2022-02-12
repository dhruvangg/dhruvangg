import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Article from "./pages/Article"

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

