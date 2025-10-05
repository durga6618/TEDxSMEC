import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Event } from '../types';
import { useEffect, useState } from 'react';

interface HeroProps {
  upcomingEvent?: Event;
  onRegisterClick: () => void;
}

export default function Hero({ upcomingEvent, onRegisterClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!upcomingEvent) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(upcomingEvent.date) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [upcomingEvent]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: upcomingEvent
            ? `url(${upcomingEvent.banner})`
            : 'url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-red-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="text-red-600">TEDx</span>SMEC
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 font-light">
            Ideas Worth Spreading
          </p>

          {upcomingEvent && (
            <div className="mt-12 space-y-8">
              <div className="bg-black/50 backdrop-blur-md border border-red-600/30 rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {upcomingEvent.name}
                </h2>

                <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-red-600" />
                    <span>{new Date(upcomingEvent.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-red-600" />
                    <span>{upcomingEvent.venue}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item) => (
                    <div key={item.label} className="bg-red-600/20 backdrop-blur-sm rounded-lg p-4 border border-red-600/30">
                      <div className="text-3xl md:text-4xl font-bold text-white">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onRegisterClick}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-red-600/50"
                >
                  Register Now
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {!upcomingEvent && (
            <div className="mt-12">
              <p className="text-xl text-gray-300 mb-8">
                Join us for inspiring talks and transformative ideas
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Stay Tuned for Updates
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
