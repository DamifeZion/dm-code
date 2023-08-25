import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/exportComponent';
import {Home, Docs} from './pages/exportPages';

function App() {

  return (
    <section>
      <BrowserRouter>

        <div className='sticky top-0 z-[100]'>
          <Navbar />
        </div>

        <Routes>
          <Route path='/'
           element={<Home/>}/>

          <Route path='/docs'
           element={<Docs />}/>
        </Routes>

      </BrowserRouter>
    </section>
    
  )
}

export default App
