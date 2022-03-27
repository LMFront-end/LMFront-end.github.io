import './App.css'
import {Routes, Route} from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar'
import { Home} from './pages/Home'
import { Gifs } from './pages/Gifs';
import { Curiosities } from './pages/Curiosities';


function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
      <Route path={"/"} exact element={<Home />}/>
      <Route path={"/curiosities"} exact element={<Curiosities/>}/>
      <Route path={"/gifs"} exact element={<Gifs />}/>
      </Routes>
    </>
  )
}

export default App
