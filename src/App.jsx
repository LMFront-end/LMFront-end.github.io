import './App.css'
import {Routes, Route} from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar'
import { Home} from './pages/Home'
import { Gifs } from './pages/Gifs';
import { Curiosities } from './pages/Curiosities';
import { CardDetails} from './components/CardDetails/CardDetails'
import {Characters} from './pages/Characters';
import { Episodes } from './pages/Episodes';
import { Location } from './pages/Location';


function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
      <Route path={"/"} exact element={<Home />}/>
      <Route path={"/curiosities"} exact element={<Curiosities/>}/>
      <Route path={"/gifs"} exact element={<Gifs />}/>

      <Route path={"/characters"} exact element={<Characters/>}/>
      <Route path={"/:id"} exact element={<CardDetails />}/>

      <Route path={"/episodes"} exact element={<Episodes/>}/>
      <Route path={"/episodes/:id"} exact element={<CardDetails />}/>

      <Route path={"/location"} exact element={<Location/>}/>
      <Route path={"/location/:id"} exact element={<CardDetails />}/>

      </Routes>
    </>
  )
}

export default App
