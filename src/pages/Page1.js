/*eslint-disable*/
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Page1() {
  const pm = useParams().item;

  return (
    <>
    <h2>Page1.js에서 찍은 영역</h2>
    <h4>{pm === 'h' ? '니가 app.js에서 콜론 뒤에 item을 붙였고, Page1.js의 삼항연산자에서 true값으로 나온 부분' : pm}</h4>
    </>
  );
}

// http://localhost:3000/p1/사과
// App.js에서 item이라고 적어놓은 게 pm이라는 변수를 통해 넘어왔다.