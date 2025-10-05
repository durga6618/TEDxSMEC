export interface Event {
  id: string;
  name: string;
  date: string;
  venue: string;
  description: string;
  banner: string;
  registrationLink?: string;
  status: 'upcoming' | 'past';
  speakers: string[];
  videoUrl?: string;
}

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  talkTopic?: string;
  videoUrl?: string;
  eventId?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail?: string;
  eventId: string;
  eventName: string;
  caption?: string;
}

export interface Registration {
  id: string;
  eventId: string;
  name: string;
  email: string;
  phone: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  registrationDate: string;
}
