import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import SpeakersSection from './components/SpeakersSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EventDetailModal from './components/EventDetailModal';
import SpeakerDetailModal from './components/SpeakerDetailModal';
import RegistrationModal from './components/RegistrationModal';
import { mockEvents, mockSpeakers, mockTeam, mockMedia } from './data/mockData';
import { Event, Speaker } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [registrationEvent, setRegistrationEvent] = useState<Event | null>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    events: eventsRef,
    speakers: speakersRef,
    gallery: galleryRef,
    team: teamRef,
    contact: contactRef
  };

  const handleNavigate = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 64;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setCurrentSection(section);
    }
  };

  const handleEventClick = (eventId: string) => {
    const event = mockEvents.find((e) => e.id === eventId);
    if (event) setSelectedEvent(event);
  };

  const handleSpeakerClick = (speakerId: string) => {
    const speaker = mockSpeakers.find((s) => s.id === speakerId);
    if (speaker) setSelectedSpeaker(speaker);
  };

  const handleRegisterClick = () => {
    const upcomingEvent = mockEvents.find((e) => e.status === 'upcoming');
    if (upcomingEvent) {
      setRegistrationEvent(upcomingEvent);
    }
  };

  const handleEventRegister = () => {
    if (selectedEvent) {
      setSelectedEvent(null);
      setRegistrationEvent(selectedEvent);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const offsetBottom = offsetTop + ref.current.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const upcomingEvent = mockEvents.find((e) => e.status === 'upcoming');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={handleNavigate} currentSection={currentSection} />

      <div ref={homeRef}>
        <Hero upcomingEvent={upcomingEvent} onRegisterClick={handleRegisterClick} />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={eventsRef}>
        <EventsSection
          events={mockEvents}
          speakers={mockSpeakers}
          onEventClick={handleEventClick}
        />
      </div>

      <div ref={speakersRef}>
        <SpeakersSection speakers={mockSpeakers} onSpeakerClick={handleSpeakerClick} />
      </div>

      <div ref={galleryRef}>
        <GallerySection media={mockMedia} />
      </div>

      <div ref={teamRef}>
        <TeamSection team={mockTeam} />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer onNavigate={handleNavigate} />

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          speakers={mockSpeakers}
          onClose={() => setSelectedEvent(null)}
          onRegister={handleEventRegister}
        />
      )}

      {selectedSpeaker && (
        <SpeakerDetailModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

      {registrationEvent && (
        <RegistrationModal
          event={registrationEvent}
          onClose={() => setRegistrationEvent(null)}
        />
      )}
    </div>
  );
}

export default App;
