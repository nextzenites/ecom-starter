import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/Home.jsx';
import ProductPage from './pages/Product.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/product" element={<ProductPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
