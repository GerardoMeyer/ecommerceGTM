import {Routes, Route} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar de la página aquí */}
      <Navbar/> {/* Contenmido de la página aquí */}
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

      {/* Footer de la página aquí */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
