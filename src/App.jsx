import './App.css'
import {Routes, Route} from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar'
import { Home} from './pages/Home'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
      <Route path={"/"} exact element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
