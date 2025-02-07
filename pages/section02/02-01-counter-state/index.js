import { useState } from "react"

export default function CounterState() {

  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1)
  }
  function onClickCountDown() {
    setCount(count - 1)
  }
  return(
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 +</button>
      <button onClick={onClickCountDown}>카운트 -</button>
    </>
  )
}