import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Button from './Button'
import UseEffectComponent from './useEffect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/useEffect" element={<UseEffectComponent />}/>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
