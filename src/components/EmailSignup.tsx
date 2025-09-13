import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section id="signup" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-12">
              <CheckCircle size={64} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                You're all set! 🎉
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thanks for joining the GhumoBee community! We'll notify you as soon as we launch.
              </p>
              <button 
                onClick={() => setIsSubscribed(false)}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Subscribe another email →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Mail size={48} className="text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get notified when we launch
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of travelers and hosts waiting for GhumoBee to go live!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-gray-700 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-1">
              <span>🔒</span>
              <span>Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <span>📧</span>
              <span>No Spam</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <span>⚡</span>
              <span>Instant Updates</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <span>❌</span>
              <span>Unsubscribe Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;