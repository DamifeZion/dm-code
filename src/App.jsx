import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, Docs} from './pages/exportPages'


function App() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/docs' element={<Docs />}/>
        </Routes>
      </BrowserRouter>
    </section>
    
  )
}

export default App
