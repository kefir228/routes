import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from 'components/Main/Main';
import { Public } from 'components/Public/Public';
import { Menu } from 'components/Menu/Menu';
import { Photo } from 'components/Photo/Photo';
import { Phone } from 'components/Phone/Phone';
import { Registration } from './components/Registration/Registration';

import cat1 from './components/Img/cat1.jpg'
import cat2 from './components/Img/cat2.jpg'
import cat3 from './components/Img/cat3.jpg'
import cat4 from './components/Img/cat4.jpg'
import cat5 from './components/Img/cat5.jpg'
import cat6 from './components/Img/cat6.jpg'
import cat7 from './components/Img/cat7.jpg'

interface CatImage {
  id: number;
  src: string;
}

const catImages: CatImage[] = [
  { id: 1, src: cat1 },
  { id: 2, src: cat2 },
  { id: 3, src: cat3 },
  { id: 4, src: cat4 },
  { id: 5, src: cat5 },
  { id: 6, src: cat6 },
  { id: 7, src: cat7 }
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/public' element={<Public />} />
          <Route path='/photo' element={<Photo images={catImages} />} />
          <Route path='/contacts' element={<Phone />} />
          <Route path='registration' element={<Registration/>}/>
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App;
