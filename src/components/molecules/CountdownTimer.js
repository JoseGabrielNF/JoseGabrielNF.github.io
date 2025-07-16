import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = 'September 9, 2025 08:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <div className="countdown-box rounded-lg p-4 w-24 bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="text-3xl font-bold">{formatNumber(timeLeft.days)}</div>
        <div className="text-sm">Dias</div>
      </div>
      <div className="countdown-box rounded-lg p-4 w-24 bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="text-3xl font-bold">{formatNumber(timeLeft.hours)}</div>
        <div className="text-sm">Horas</div>
      </div>
      <div className="countdown-box rounded-lg p-4 w-24 bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="text-3xl font-bold">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-sm">Minutos</div>
      </div>
      <div className="countdown-box rounded-lg p-4 w-24 bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="text-3xl font-bold">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-sm">Segundos</div>
      </div>
    </div>
  );
};

export default CountdownTimer;