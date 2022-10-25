/* eslint-disable */ 
import w from '../db/weather2.json'

export default function WeatherMain2() {
const PTY = w.response.body.items.item[0];
const REH = w.response.body.items.item[1];
const RN1 = w.response.body.items.item[2];
const T1H = w.response.body.items.item[3];
const UUU = w.response.body.items.item[4];
const VEC = w.response.body.items.item[5];
const VVV = w.response.body.items.item[6];
const WSD = w.response.body.items.item[7];
const items = [];


  return (
    <>
    <header>
      <h1>단기예보</h1>
    </header>
    <form>
      <button>홈으로</button>
    </form>

    <nav>
      <ul>
        <li>강수형태: {PTY.obsrValue}</li>
        <li>습도: {REH.obsrValue}%</li>
        <li>1시간 강수량: {RN1.obsrValue}mm </li>
        <li>기온: {T1H.obsrValue}°C </li>
        <li>풍속(동서성분): {UUU.obsrValue}m/s </li>
        <li>풍향: {VEC.obsrValue}deg</li>
        <li>풍속(남북성분): {VVV.obsrValue}m/s</li>
        <li>풍속: {WSD.obsrValue}m/s</li>
      </ul>
    </nav>
    </>
  );
}