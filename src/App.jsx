import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import products from './data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'
import { ThemeProvider } from './context/ThemeProvider'
import Navbar from './pages/Component/Navbar'
import { AuthProvider } from './context/AuthProvider'

function App() {
  const [isRegistered, setIsRegister] = useState(false)

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage setIsRegister={setIsRegister} />} />
            <Route path="/dashboard" element={<Dashboard products={products} />} />
            <Route path="/dashboard/:ID" element={<ProductInfo />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
