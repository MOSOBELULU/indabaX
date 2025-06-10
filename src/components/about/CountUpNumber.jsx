import { useState, useEffect } from "react";

const CountUpNumber = ({ target, duration = 5000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const increment = end / (duration / 16); 
    let animationFrame;

    const updateCounter = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
};

export default CountUpNumber;
