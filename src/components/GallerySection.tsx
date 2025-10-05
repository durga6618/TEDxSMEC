import { X, Play, Image as ImageIcon } from 'lucide-react';
import { MediaItem } from '../types';
import { useState } from 'react';

interface GallerySectionProps {
  media: MediaItem[];
}

export default function GallerySection({ media }: GallerySectionProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const filteredMedia = filter === 'all' ? media : media.filter((item) => item.type === filter);

  const groupedMedia = filteredMedia.reduce((acc, item) => {
    if (!acc[item.eventName]) {
      acc[item.eventName] = [];
    }
    acc[item.eventName].push(item);
    return acc;
  }, {} as Record<string, MediaItem[]>);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Media <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Relive the moments that made our events unforgettable
          </p>

          <div className="flex justify-center gap-4">
            {(['all', 'photo', 'video'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === filterType
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {Object.entries(groupedMedia).map(([eventName, items]) => (
          <div key={eventName} className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-red-600 rounded-full" />
              {eventName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMedia(item)}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
                >
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-3 transform transition-all duration-300 group-hover:scale-110">
                        <Play size={24} className="text-white fill-current" />
                      </div>
                    </div>
                  )}

                  {item.type === 'photo' && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                        <ImageIcon size={16} className="text-white" />
                      </div>
                    </div>
                  )}

                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm text-white font-medium">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 rounded-full p-3 transition-colors duration-300"
            >
              <X size={24} className="text-white" />
            </button>

            <div
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'photo' ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.caption}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <div className="aspect-video w-full">
                  <iframe
                    src={selectedMedia.url}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
              )}

              {selectedMedia.caption && (
                <div className="mt-4 text-center">
                  <p className="text-white text-lg">{selectedMedia.caption}</p>
                  <p className="text-gray-400 text-sm mt-2">{selectedMedia.eventName}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
