import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
      <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">
        {label}
      </div>
    </div>
  );

  return (
    <section id="countdown" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Clock size={32} className="text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Launching Soon!
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Be the first to explore opportunities across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-12">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-teal-100 rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            What happens when we launch?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">🚀</span>
              <span>Full platform access</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">🎯</span>
              <span>Host-volunteer matching</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">💬</span>
              <span>Community features</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;