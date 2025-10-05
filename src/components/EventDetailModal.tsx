import { X, Calendar, MapPin, Users, Play } from 'lucide-react';
import { Event, Speaker } from '../types';

interface EventDetailModalProps {
  event: Event;
  speakers: Speaker[];
  onClose: () => void;
  onRegister: () => void;
}

export default function EventDetailModal({ event, speakers, onClose, onRegister }: EventDetailModalProps) {
  const eventSpeakers = speakers.filter((s) => event.speakers.includes(s.id));

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 rounded-full p-2 transition-colors duration-300 z-10"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="relative h-96">
          <img
            src={event.banner}
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          {event.videoUrl && event.status === 'past' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={event.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-all duration-300 transform hover:scale-110"
              >
                <Play size={48} className="text-white fill-current" />
              </a>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                event.status === 'upcoming'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800/90 text-gray-300'
              }`}
            >
              {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
            </span>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-4xl font-bold text-white mb-6">{event.name}</h2>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar size={20} className="text-red-600" />
              <span>
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={20} className="text-red-600" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users size={20} className="text-red-600" />
              <span>{eventSpeakers.length} Speakers</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">About This Event</h3>
            <p className="text-gray-400 leading-relaxed">{event.description}</p>
          </div>

          {eventSpeakers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Featured Speakers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventSpeakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="bg-black/50 border border-red-600/20 rounded-lg p-4 hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{speaker.name}</h4>
                        <p className="text-gray-400 text-sm">{speaker.designation}</p>
                      </div>
                    </div>
                    {speaker.talkTopic && (
                      <p className="text-gray-500 text-sm italic mt-3 line-clamp-2">
                        "{speaker.talkTopic}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.status === 'upcoming' && (
            <div className="flex gap-4">
              <button
                onClick={onRegister}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </button>
              <button
                onClick={onClose}
                className="px-8 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
              >
                Close
              </button>
            </div>
          )}

          {event.status === 'past' && event.videoUrl && (
            <div className="flex gap-4">
              <a
                href={event.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center inline-flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch Event
              </a>
              <button
                onClick={onClose}
                className="px-8 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
