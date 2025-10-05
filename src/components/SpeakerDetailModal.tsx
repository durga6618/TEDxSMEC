import { X, Play, Briefcase } from 'lucide-react';
import { Speaker } from '../types';

interface SpeakerDetailModalProps {
  speaker: Speaker;
  onClose: () => void;
}

export default function SpeakerDetailModal({ speaker, onClose }: SpeakerDetailModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 rounded-full p-2 transition-colors duration-300 z-10"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <div className="relative h-96 rounded-xl overflow-hidden border border-red-600/20">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {speaker.videoUrl && (
              <div className="mt-6">
                <div className="aspect-video rounded-xl overflow-hidden border border-red-600/20">
                  <iframe
                    src={speaker.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white mb-2">{speaker.name}</h2>

            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <Briefcase size={18} className="text-red-600" />
              <span>{speaker.designation}</span>
            </div>

            {speaker.talkTopic && (
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">Talk Topic</h3>
                <p className="text-gray-300 italic">"{speaker.talkTopic}"</p>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Biography</h3>
              <p className="text-gray-400 leading-relaxed">{speaker.bio}</p>
            </div>

            <div className="mt-auto">
              {speaker.videoUrl ? (
                <a
                  href={speaker.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  Watch Talk
                </a>
              ) : (
                <button
                  onClick={onClose}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
