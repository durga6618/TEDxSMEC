import { Lightbulb, BookOpen, Users, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-600">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-lg p-3 flex-shrink-0">
                <Lightbulb size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">About TEDx</h3>
                <p className="text-gray-400 leading-relaxed">
                  In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events
                  that bring people together to share a TED-like experience. At a TEDx event, TED Talks video
                  and live speakers combine to spark deep discussion and connection.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  These local, self-organized events are branded TEDx, where x = independently organized TED event.
                  The TED Conference provides general guidance for the TEDx program, but individual TEDx events are
                  self-organized. TEDx events follow certain rules and regulations provided by TED to ensure quality
                  and maintain the spirit of TED's mission of ideas worth spreading.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 rounded-xl p-6 text-center">
                <Target size={32} className="text-red-600 mx-auto mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-gray-400 text-sm">
                  Spread ideas that matter and inspire positive change
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 rounded-xl p-6 text-center">
                <Users size={32} className="text-red-600 mx-auto mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">Our Community</h4>
                <p className="text-gray-400 text-sm">
                  Building a network of thinkers and innovators
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 rounded-lg p-3 flex-shrink-0">
                <BookOpen size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">About SMEC</h3>
                <p className="text-gray-400 leading-relaxed">
                  St. Martin's Engineering College (SMEC) is a premier institution dedicated to excellence in
                  technical education and research. Located in Hyderabad, the college has established itself
                  as a center for innovation, fostering an environment where students can develop both technical
                  expertise and creative thinking.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  SMEC is committed to nurturing future leaders and innovators who will shape tomorrow's world.
                  By hosting TEDxSMEC, we provide a platform for our community to engage with groundbreaking ideas
                  and visionary speakers, inspiring our students to think beyond conventional boundaries and
                  pursue excellence in all their endeavors.
                </p>
              </div>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden border border-red-600/20">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="SMEC Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">
                  St. Martin's Engineering College
                </p>
                <p className="text-gray-300 text-sm">Empowering minds, transforming futures</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-600/10 to-red-900/10 border border-red-600/30 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Why TEDxSMEC?</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              TEDxSMEC brings together students, faculty, industry leaders, and innovators to share ideas
              that challenge perspectives and inspire action. Our events create a unique space for intellectual
              discourse, creative expression, and meaningful connections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
                <div className="text-gray-400">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-400">Inspiring Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">5000+</div>
                <div className="text-gray-400">Attendees Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
