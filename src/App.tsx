import { Routes, Route  } from "react-router-dom"
import { Home } from './pages/Home.tsx'
import { Store } from './pages/Store.tsx'
import { About } from './pages/About.tsx'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default App
