import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClik = (k) => {
  const url = {
    '사과' : '/p2?item=사과&item2=과일',
    '바나나' : '/p2?item=바나나&item2=과일',
    '당근' : '/p2?item=당근&item2=채소',
  }

  console.log(url)
  navigate(url[k]);
  }


  return (
    <>
    <h2>Home.js에서 찍어서 Page1.js로 이동시킬 부분</h2>
    <li><Link to='/p1/사과a'>P1으로 넘어가는 사과</Link></li>
      <li><Link to='/p1/바나나'>P1으로 넘어가는 바나나</Link></li>
      <li><Link to='/p1/당근'>P1으로 넘어가는 당근</Link></li>

      <h2>Page2로 이동</h2>

      <button onClick={() => handleClik('사과')}>사과</button>
      <button onClick={() => handleClik('바나나')}>바나나</button>
      <button onClick={() => handleClik('당근')}>당근</button>


    </>
  );
}

      {/* <ul>
    <li><Link to='/p2?item=사과&item2=과일'>사과</Link></li>
      <li><Link to='/p2?item=바나나&item2=과일'>바나나</Link></li>
      <li><Link to='/p2?item=당근&item2=채소'>당근</Link></li>
      </ul> */}
      
      {/* <button><Link to='/p1/사과a'>P1으로 넘어가는 사과버튼</Link></button>
      <button><Link to='/p1/바나나'>P1으로 넘어가는 바나나버튼</Link></button>
      <button><Link to='/p1/사과a'>P1으로 넘어가는 당근버튼</Link></button> */}