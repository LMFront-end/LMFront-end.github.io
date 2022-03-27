import './App.css'
import {Routes, Route} from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar'
import { Home} from './pages/Home'
import { MusicEpisodes } from './pages/MusicEpisodes';
import { Curiosities } from './pages/Curiosities';

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
      <Route path={"/"} exact element={<Home />}/>
      <Route path={"/curiosities"} exact element={<Curiosities/>}/>
      <Route path={"/music"} exact element={<MusicEpisodes />}/>
      </Routes>
    </>
  )
}

export default App
