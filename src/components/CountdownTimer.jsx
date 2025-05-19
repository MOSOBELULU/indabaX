import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-08-15T00:00:00");
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBoxes = [
    { label: "Days", value: timeLeft.days ?? 0 },
    { label: "Hours", value: timeLeft.hours ?? 0 },
    { label: "Minutes", value: timeLeft.minutes ?? 0 },
    { label: "Seconds", value: timeLeft.seconds ?? 0 },
  ];

  return (
    <section className=" py-12 text-center">
      <div className="max-w-xl mx-auto px-4">

        <div className="flex justify-center gap-4 flex-wrap">
          {timeBoxes.map((box, index) => (
           <div
  key={index}
  className="w-24 h-24 flex flex-col justify-center items-center  text-white"
>

              <AnimatePresence mode="wait">
                <motion.p
                  key={box.value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="text-3xl font-bold"
                >
                  {box.value}
                </motion.p>
              </AnimatePresence>
              <p className="text-sm font-medium mt-1 uppercase tracking-wide">
                {box.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
