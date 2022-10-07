import { useEffect, useState } from "react";
import { MyButton } from "./MyButton";

// Side-Effects are not allowed in renders,
// but they are allowed ***after*** the render.

// useEffect will run after the render.

export function Counter({ init }) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    if (window.localStorage.getItem("count")) {
      setCount(+window.localStorage.getItem("count"));
    }
  }, []);

  function increase(amount) {
    setCount(count + amount);
    window.localStorage.setItem("count", count + amount);
  }

  return (
    <>
      <h1>The count is {count}</h1>
      <br /> <br />
      <MyButton onClick={increase} changeAmount={1} />
      <MyButton onClick={increase} changeAmount={-10} />
      <MyButton onClick={increase} changeAmount={100} />
    </>
  );
}
