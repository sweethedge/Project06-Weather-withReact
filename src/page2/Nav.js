
import {Link} from 'react-router-dom';
import './Nav.css'
export default function Nav() {

  return (
    <>
    <header>
    <h1>일기예보</h1>
    </header>
    <section>
    <button><Link to='/WM'>단기예보</Link></button> 
    <br/><br/>
    <button><Link to='/WM2'>중기예보</Link></button> 
    </section>
    </>
  );
}