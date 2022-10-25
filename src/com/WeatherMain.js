/* eslint-disable */
import {Link} from 'react-router-dom';
import WeatherDay from "./WeatherDay";
import { useState } from 'react'
import './WeatherMain.css'

function WeatherMain() {
  let [day, setDay] = useState(3);
  const handleClick = (d) => {
    setDay(d);
    // console.log(d);
  }

  return (
    <>
    <header>
      <h1>날씨예보</h1>
    </header>
    <nav>
      <form>
      
        <button onClick={(e) => {e.preventDefault(); handleClick(3)}}>3일후 날씨</button>
        <button onClick={(e) => {e.preventDefault(); handleClick(4)}}>4일후 날씨</button>
        <button onClick={(e) => {e.preventDefault(); handleClick(5)}}>5일후 날씨</button>
        <button onClick={(e) => {e.preventDefault(); handleClick(6)}}>6일후 날씨</button>
      </form>
      </nav>
      <WeatherDay d={day} />
      <footer>
      <button><Link to='/'>가리기</Link></button>
      </footer>
    </>
  );
}

export default WeatherMain;