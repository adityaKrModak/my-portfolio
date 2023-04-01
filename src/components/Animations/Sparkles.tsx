import React, { ReactNode, useEffect, useState } from "react";
import { generateSparkle, random } from "./animations.utils";
import StarInstance from "./StarInstance";

interface SparklesProps {
  children: ReactNode;
}

const Sparkles = ({ children }: SparklesProps) => {
  const sparkle = generateSparkle();
  const [sparkles, setSparkles] = useState([]);
  const [randomInterval, setRandomInterval] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle();
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });
      nextSparkles.push(sparkle);
      console.log("sparkles length" + sparkles.length);
      setSparkles(nextSparkles);
      //   setRandomInterval(random(1000, 1500));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="relative inline-block">
      {/* {sparkles.map((sparkle) => ( */}
      <StarInstance
        key={sparkle.id}
        color={sparkle.color}
        size={sparkle.size}
        style={sparkle.style as React.HTMLAttributes<HTMLSpanElement>}
      />
      {/* ))} */}

      <strong className="relative z-100 font-bold">{children}</strong>
    </span>
  );
};

export default Sparkles;
