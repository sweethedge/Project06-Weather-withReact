/* eslint-disable */
import w from '../db/weather.json'
import './WeatherDay.css'

export default function WeatherDay(props) {
  const d = props.d;
  const witem = w.response.body.items.item[0];
  console.log(witem);
  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`]
  console.log(keys)
  for (let k of keys) {
    items.push(witem[k])
  }
  console.log(items)

  return(
    <>
    {/* <h2>{props.d}</h2> */}
    <section>
    <ul>
      <li>{props.d}일후 오전 강수량: {items[0]}mm</li>
      <li>{props.d}일후 오후 강수량: {items[1]}mm</li>
      <li>{props.d}일후 오전 날씨예보: {items[2]}</li>
      <li>{props.d}일후 오후 날씨예보: {items[3]}</li>
    </ul>
    </section>
    </>
  );
}