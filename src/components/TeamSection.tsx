import { Mail, Linkedin, Twitter } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamSectionProps {
  team: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate individuals bringing ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-xl overflow-hidden hover:border-red-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300">{member.designation}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6">
                <h3 className="text-2xl font-bold text-white text-center">{member.name}</h3>
                <p className="text-red-600 font-semibold text-center">{member.designation}</p>

                <div className="flex gap-4 mt-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-red-600 hover:bg-red-700 rounded-full p-3 transition-colors duration-300"
                    >
                      <Mail size={20} className="text-white" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-red-600 hover:bg-red-700 rounded-full p-3 transition-colors duration-300"
                    >
                      <Linkedin size={20} className="text-white" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-red-600 hover:bg-red-700 rounded-full p-3 transition-colors duration-300"
                    >
                      <Twitter size={20} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
