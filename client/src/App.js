import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
