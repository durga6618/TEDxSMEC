import { X, CreditCard, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Event } from '../types';

interface RegistrationModalProps {
  event: Event;
  onClose: () => void;
}

export default function RegistrationModal({ event, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-2xl w-full bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-red-600 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors duration-300"
          >
            <X size={20} className="text-white" />
          </button>
          <h2 className="text-3xl font-bold text-white">Register for Event</h2>
          <p className="text-red-100 mt-2">{event.name}</p>
        </div>

        <div className="p-8">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2 flex items-center gap-2">
                  <User size={18} className="text-red-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-red-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2 flex items-center gap-2">
                  <Mail size={18} className="text-red-600" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-red-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 font-medium mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-red-600" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/50 border border-red-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-gray-300 font-medium mb-2">
                  Organization / Institution
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-black/50 border border-red-600/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Your organization (optional)"
                />
              </div>

              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Registration Fee</span>
                  <span className="text-white font-bold text-xl">₹500</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Includes access to all talks, networking, and refreshments
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Proceed to Payment
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="bg-black/50 border border-red-600/30 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Registration Details</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span className="text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span className="text-white">{formData.phone}</span>
                  </div>
                  <div className="border-t border-red-600/20 pt-2 mt-2">
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total Amount:</span>
                      <span className="text-white font-bold">₹500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 rounded-lg p-6 text-center">
                <CreditCard size={48} className="text-red-600 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Payment Integration</h3>
                <p className="text-gray-400 mb-4">
                  Payment gateway integration placeholder
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  In production, this will integrate with Razorpay, Stripe, or PayPal for secure payment processing
                </p>
                <button
                  onClick={handlePayment}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Complete Registration (Demo)
                </button>
              </div>

              <button
                onClick={() => setStep('form')}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                Back to Form
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <div className="bg-green-600 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Registration Successful!</h3>
              <p className="text-gray-400 mb-6">
                Thank you for registering for {event.name}
              </p>
              <div className="bg-black/50 border border-green-600/30 rounded-lg p-6 mb-6">
                <p className="text-gray-300 mb-2">
                  A confirmation email has been sent to:
                </p>
                <p className="text-white font-semibold text-lg">{formData.email}</p>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Please check your email for your event ticket and QR code
              </p>
              <button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
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
