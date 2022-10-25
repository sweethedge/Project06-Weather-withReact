/* eslint-disable */

import {Route, Routes} from 'react-router-dom';
import Nav from './page2/Nav'
import WeatherMain from './com/WeatherMain'
import WeatherMain2 from './com/WeatherMain2'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Nav />} />
      <Route path='/WM' element={<WeatherMain />} />
    <Route path='/WM2' element={<WeatherMain2 />} />
    </Routes>
    </>
  )
}


export default App;

