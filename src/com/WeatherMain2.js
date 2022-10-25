  /* eslint-disable */ 
  import weather2 from '../db/weather2.json'
  import item from '../db/item.json'
  import './WeatherMain2.css'
  import {Link} from 'react-router-dom';
  
  export default function WeatherMain2() {

    const w2 = weather2.response.body.items.item;
    // Object.entries()를 쓰셨단 얘기는 어쨌든 [K, V]로 뽑겠다는 얘기다. 중괄호 안에 들어갈 것도 [0] 또는 [1]이 들어가야 될 거다.
    // const lis = Object.entries(w2).map((m) => 
    // <li key= {m[1].category}>
    //   {item[m[1].category][0]} 
    //   {m[1].obsrValue}
    //   &nbsp;{item[m[1].category][1]} </li>)

    // 자바이든 JS이든 위에서부터 밑으로 긁는다. access가 안된다고 하면 그 변수가 어디에 붙어있는지 쳐다봐라.
    const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
    const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };

    const lis = w2.map((m) => 
    (m.category === 'PTY')
    ? <li key={m.category}> {item[m.category][0]} {pty[m.obsrValue]} </li>
    : (m.category === 'SKY')  
    ? <li key={m.category}> {item[m.category][0]} {sky[m.obsrValue]} </li>
    : <li key={m.category}> {item[m.category][0]} {m.obsrValue} {item[m.category][1]} </li>);
    
    return (
      <>
      <header>
      <h1>중기예보</h1>
      </header>
      <form>
      <button><Link to='/'>홈으로</Link></button>
      </form>
      <ul>
      {lis}
      </ul>
      </>
      );
    }

    // let lis = [];
    // for(let w of w2) {
    //     if (w.category === 'PTY') {  
    //     } else if (w.category === 'SKY') {
    //     } else {
    //       lis.push(<li key= {w.category}>{w.category} : {w.obsrValue}</li>)
    //     }
    // }

    // const lis = Object.entries(w2).map((m) => 
    // (m[1].category === 'PTY' ?
    // (<li key= {m[1].category}>
    //   {item[m[1].category][0]} 
    //   {m[1].obsrValue}
    //   {pty[m[1].obsrValue]}
    //   </li>)
    //   : (m[1].category === 'SKY' ? 
    //   <li key= {m[1].category}>
    //     {item[m[1].category][0]} 
    //   {m[1].obsrValue}
    //   {sky[m[1].obsrValue]}
    //   </li>
    //   : <li key= {m[1].category}>
    //     {item[m[1].category][0]} 
    //     {m[1].obsrValue}
    //     {item[m[1].category][1]} 
    //   </li>
    //   ))
    // );