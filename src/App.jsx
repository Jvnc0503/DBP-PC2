import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/login'
import Register from './components/Register';
import NavBar from './components/NavBar';
import RegisterProduct from './components/RegisterProduct';
import UpdateProduct from './components/UpdateProduct';
import './App.css'
import ReadProduct from './components/ReadProduct';
import DeleteProduct from './components/DeleteProduct';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products/register" element={<RegisterProduct/>} />
        <Route path="/products/read" element={<ReadProduct/>} />
        <Route path="/products/update" element={<UpdateProduct/>} />
        <Route path="/products/delete" element={<DeleteProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;