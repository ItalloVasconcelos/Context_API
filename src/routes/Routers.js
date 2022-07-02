import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import About  from '../pages/about/About'
import  Content  from '../pages/cotent/Content'
import Navbar from '../components/navbar/Navbar'


const Rotas = () => {
  return (
    <div>
      <h1>Lista de páginas</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas
