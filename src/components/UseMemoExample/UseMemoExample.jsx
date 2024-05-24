import { useMemo, useState } from "react";
import Button from "../Button/Button";
import css from "./UseMemoExample.module.css";

const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const value = useMemo(() => {
    console.log("Calculating value a + b");
    return a + b;
  }, [a, b]);

  const x = useMemo(() => {
    console.log("Calculating value b + c");
    return b + c;
  }, [b, c]);

  return (
    <div>
      <div className={css.buttonsContainer}>
        <Button onClick={() => setA(a + 1)}>update a: {a}</Button>
        <Button onClick={() => setB(b + 1)}>update b: {b}</Button>
        <Button onClick={() => setC(c + 1)}>update c: {c}</Button>
      </div>
      <p>value: {value}</p>
      <p>x: {x}</p>
    </div>
  );
};

export default UseMemoExample;
