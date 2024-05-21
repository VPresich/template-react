import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(Date.now);
    }, 1000);
    console.log("Mount");
    return () => {
      console.log("Cleanup");
      clearInterval(intervalId);
    };
  }, []);
  return <div>Timer</div>;
};

export default Timer;
