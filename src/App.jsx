import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import TopBar from './components/Topbar';
import About from './pages/About';
import Services from './pages/Services';

export default function App() {
  return <BrowserRouter>
  <TopBar />
  <Header />
    <Routes>
      <Route path = "/" element = {<Home />} /> {/* done */}
      <Route path = "/about" element = {<About />} /> {/* done */}
      <Route path = "/services" element = {<Services />} /> {/* done */}
    </Routes>
    <Footer />

  </BrowserRouter>
    
}
