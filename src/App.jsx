import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import TopBar from './components/Topbar';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/projects';
import Contact from './pages/Contact';
export default function App() {
  return <BrowserRouter>
  <TopBar />
  <Header />
    <Routes>
      <Route path = "/" element = {<Home />} /> {/* done */}
      <Route path = "/about" element = {<About />} /> {/* done */}
      <Route path = "/services" element = {<Services />} /> {/* done */}
      <Route path = "/projects" element = {<Projects />} /> {/* done */}
      <Route path = "/contact" element = {<Contact />} /> {/* done */}
    </Routes>
    <Footer />

  </BrowserRouter>
    
}
