import { useState, useEffect } from "react";
import axios from "axios";

export const Festival = () => {
  const [festival, setFestival] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/festival")
      .then((response) => {
        setFestival(response.data);
        startCountdown(response.data[0].date);
      })
      .catch((error) => console.error("Error fetching festival data:", error));
  }, []);

  const startCountdown = (festivalDate) => {
    const targetDate = new Date(festivalDate);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      return difference > 0
        ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      {festival ? (
        <>
          <h1 className="text-4xl font-bold mb-4">
            🛕 {festival[0].festivalName}
          </h1>
          <p className="text-lg italic mb-2">{festival[0].description}</p>

          {timeLeft && (
            <div className="flex space-x-6 text-3xl font-semibold">
              <div className="bg-gray-800 p-4 rounded-lg">
                <span>{timeLeft.days}</span>
                <p className="text-sm">Days</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <span>{timeLeft.hours}</span>
                <p className="text-sm">Hours</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <span>{timeLeft.minutes}</span>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <span>{timeLeft.seconds}</span>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
