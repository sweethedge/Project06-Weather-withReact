import { useLocation } from "react-router-dom";
import qs from 'query-string';

export default function Home() {
  const loc = useLocation().search;
  console.log(loc);

  const q = qs.parse(loc);
  console.log(q);

  // let loc2 = loc.replace('?', '').split('&')
  // loc2=loc2.map((m) => m.split('=')[1])
  // console.log(loc2)

  return (
    <>
    <h2>Page2.js에서 찍은 영역</h2>
    <h2>{q.item} ({q.item2})</h2>
    {/* {q.length === 0 ? <h2>전달자료 없음</h2>: } */}
    </>
  );
}