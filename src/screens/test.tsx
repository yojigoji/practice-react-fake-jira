import { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    ref.current = count;
  });

  console.log(ref.current);
  console.log(count);

  const handlerClick = () => {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={handlerClick}>打印</button>
    </div>
  );
}
