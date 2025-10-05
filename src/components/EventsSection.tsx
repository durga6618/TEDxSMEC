import { Calendar, MapPin, Users, Play } from 'lucide-react';
import { Event, Speaker } from '../types';

interface EventsSectionProps {
  events: Event[];
  speakers: Speaker[];
  onEventClick: (eventId: string) => void;
}

export default function EventsSection({ events, speakers, onEventClick }: EventsSectionProps) {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const pastEvents = events.filter((e) => e.status === 'past');

  const getEventSpeakers = (event: Event) => {
    return speakers.filter((s) => event.speakers.includes(s.id));
  };

  const EventCard = ({ event }: { event: Event }) => {
    const eventSpeakers = getEventSpeakers(event);

    return (
      <div
        onClick={() => onEventClick(event.id)}
        className="group bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/20"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={event.banner}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          {event.videoUrl && event.status === 'past' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 rounded-full p-4 transform transition-transform group-hover:scale-110">
                <Play size={32} className="text-white fill-current" />
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4">
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

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
            {event.name}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={18} className="text-red-600" />
              <span>
                {new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} className="text-red-600" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users size={18} className="text-red-600" />
              <span>{eventSpeakers.length} Speakers</span>
            </div>
          </div>

          <p className="text-gray-400 mb-4 line-clamp-3">{event.description}</p>

          {eventSpeakers.length > 0 && (
            <div className="flex -space-x-2 mb-4">
              {eventSpeakers.slice(0, 4).map((speaker) => (
                <img
                  key={speaker.id}
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-900"
                  title={speaker.name}
                />
              ))}
              {eventSpeakers.length > 4 && (
                <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-gray-900 flex items-center justify-center text-white text-sm font-semibold">
                  +{eventSpeakers.length - 4}
                </div>
              )}
            </div>
          )}

          <button className="w-full bg-red-600/20 hover:bg-red-600 text-red-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300 border border-red-600/50">
            View Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover inspiring talks and transformative experiences
          </p>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-red-600 rounded-full" />
              Upcoming Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gray-600 rounded-full" />
              Past Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
