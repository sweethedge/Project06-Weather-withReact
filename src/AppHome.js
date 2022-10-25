/* eslint-disable */

import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Nav from './pages/Nav';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/p1/:item' element={<Page1 />} />
      <Route path='/p2' element={<Page2 />} />
    </Routes>
    </>
  )
}


export default App;

// 15줄에서 그냥 가니까 긁히는 게 없고 니가 p1/사과 이런식으로 찍었기 때문에 에러가 안 뜬다.