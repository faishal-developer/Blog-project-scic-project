import './App.css';
import Login from './Components/login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter> 
      <ScrollToTop>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> 
        <Footer></Footer>
        </ScrollToTop>
      </BrowserRouter>

    </div>
  );
}

export default App;
