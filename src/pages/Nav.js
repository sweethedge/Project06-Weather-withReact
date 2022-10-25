import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <>
    <h2>Nav.js에서 찍은 영역</h2>
    <ul>
      <li><Link to='/'>홈으로</Link></li>
      <li><Link to='/p1/h'>Page1</Link></li>
      <li><Link to='/p2/'>Page2</Link></li>
    </ul>
    </>
  );
}