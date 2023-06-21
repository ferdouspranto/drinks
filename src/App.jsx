import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Details from './Pages/Details'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-[20px]'>
    {/* Header */}
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/details/:strCategory" element={<Details/>}></Route>
    </Routes>
    </div>
     {/* Footer */}
     <Footer/>
    </>
  )
}

export default App
