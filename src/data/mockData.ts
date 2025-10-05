import { Event, Speaker, TeamMember, MediaItem } from '../types';

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'TEDxSMEC 2024: Ideas Worth Spreading',
    date: '2024-12-15',
    venue: 'St. Martin\'s Engineering College Auditorium',
    description: 'Join us for an inspiring day of talks from visionaries, innovators, and thought leaders who are shaping the future. This year\'s theme explores innovation, sustainability, and human potential.',
    banner: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
    registrationLink: '#register',
    status: 'upcoming',
    speakers: ['1', '2', '3'],
    videoUrl: ''
  },
  {
    id: '2',
    name: 'TEDxSMEC 2023: Limitless',
    date: '2023-11-20',
    venue: 'St. Martin\'s Engineering College Auditorium',
    description: 'A celebration of boundless human potential and breakthrough ideas that challenged conventional thinking.',
    banner: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920',
    status: 'past',
    speakers: ['4', '5'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export const mockSpeakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    designation: 'AI Research Scientist',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Dr. Priya Sharma is a leading researcher in artificial intelligence and machine learning, focusing on ethical AI development and its societal impact.',
    talkTopic: 'The Future of Ethical AI',
    eventId: '1'
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    designation: 'Social Entrepreneur',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Arjun founded multiple ventures aimed at solving rural education challenges through technology and innovation.',
    talkTopic: 'Bridging the Education Gap',
    eventId: '1'
  },
  {
    id: '3',
    name: 'Maya Patel',
    designation: 'Environmental Activist',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Maya is a passionate advocate for sustainable living and has led numerous initiatives for climate action across India.',
    talkTopic: 'Our Planet, Our Responsibility',
    eventId: '1'
  },
  {
    id: '4',
    name: 'Rajesh Kumar',
    designation: 'Tech Innovator',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Serial entrepreneur and innovator who revolutionized the fintech space in emerging markets.',
    talkTopic: 'Innovation Without Limits',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    eventId: '2'
  },
  {
    id: '5',
    name: 'Anita Desai',
    designation: 'Author & Storyteller',
    image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Award-winning author whose work explores the intersection of culture, identity, and human experience.',
    talkTopic: 'The Power of Stories',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    eventId: '2'
  }
];

export const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Vikram Singh',
    designation: 'Organizer & Licensee',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'vikram@tedxsmec.com',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    designation: 'Curator',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'sneha@tedxsmec.com',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Aditya Verma',
    designation: 'Marketing Lead',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'aditya@tedxsmec.com',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'Riya Kapoor',
    designation: 'Operations Manager',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'riya@tedxsmec.com',
    linkedin: '#'
  }
];

export const mockMedia: MediaItem[] = [
  {
    id: '1',
    type: 'photo',
    url: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eventId: '2',
    eventName: 'TEDxSMEC 2023',
    caption: 'Opening ceremony'
  },
  {
    id: '2',
    type: 'photo',
    url: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eventId: '2',
    eventName: 'TEDxSMEC 2023',
    caption: 'Speaker on stage'
  },
  {
    id: '3',
    type: 'photo',
    url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eventId: '2',
    eventName: 'TEDxSMEC 2023',
    caption: 'Audience engagement'
  },
  {
    id: '4',
    type: 'photo',
    url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920',
    eventId: '2',
    eventName: 'TEDxSMEC 2023',
    caption: 'Networking session'
  },
  {
    id: '5',
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    eventId: '2',
    eventName: 'TEDxSMEC 2023',
    caption: 'Event highlights'
  }
];
