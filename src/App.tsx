import React, { useState } from 'react';
import {
  ArrowRight,
  Users,
  MapPin,
  BarChart3,
  CheckCircle,
  Mail,
  Globe,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// ── Supabase client -----------------------------------------
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// ── Resolve the logo so Vite bundles it ----------------------
// Adjust the path if you put 3.png somewhere else under /src
const logoSrc = new URL('./assets/3.png', import.meta.url).href;

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from('waitlist')
      .insert({ name, email });

    if (error) {
      console.error(error);
      alert('Could not save. Try again.');
      return;
    }

    setIsSubmitted(true);
    setName('');
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logoSrc}
              alt="BajanWheels Logo"
              className="h-16 sm:h-20 lg:h-24 mx-auto mb-4"
            />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            The Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Smart Mobility
            </span>{' '}
            is Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionary fleet management, real-time transit intelligence, and data-driven insights
            to transform how Barbados moves.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-12">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Join the Waitlist</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
                  >
                    Get Early Access
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-400 font-semibold">Welcome to the future!</p>
                <p className="text-gray-300 text-sm mt-1">We'll be in touch soon.</p>
              </div>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto">
              <div className="w-1 h-3 bg-blue-400 rounded-full mx-auto mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powering{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Smart Transportation
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Three integrated solutions working together to revolutionize mobility across Barbados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Fleet Management</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empower van owners with intelligent route optimization, real-time tracking, and automated
                scheduling to maximize efficiency and passenger satisfaction.
              </p>
              <div className="flex items-center text-sm text-blue-400 font-semibold">
                <Zap className="w-4 h-4 mr-2" />
                Smart & Efficient
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Transit Intelligence</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Keep passengers informed with live arrival times, route updates, and service notifications
                through our comprehensive transit information system.
              </p>
              <div className="flex items-center text-sm text-yellow-400 font-semibold">
                <Shield className="w-4 h-4 mr-2" />
                Always Connected
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Data Intelligence</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Provide insurers and government agencies with actionable telematics insights to enable
                smarter policy decisions and improved urban mobility planning.
              </p>
              <div className="flex items-center text-sm text-blue-400 font-semibold">
                <TrendingUp className="w-4 h-4 mr-2" />
                Data-Driven Decisions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transforming{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Barbados First
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
            Our mission is to revolutionize public transportation in Barbados through cutting-edge technology,
            creating a more efficient, reliable, and sustainable mobility ecosystem. We're building the
            foundation for smarter cities, starting right here at home.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-blue-400" />
              Barbados Focus
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
              Caribbean Expansion
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-blue-400" />
              Future-Ready Technology
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-yellow-400/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Shape the Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Transportation?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our waitlist today and be among the first to experience the next generation of
            smart mobility solutions in Barbados.
          </p>
          <button
            onClick={() => document.querySelector<HTMLInputElement>('input[type="email"]')?.focus()}
            className="bg-gradient-to-r from-blue-500 to-yellow-400 hover:from-blue-600 hover:to-yellow-500 py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join the Movement
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <img src={logoSrc} alt="BajanWheels Logo" className="h-8 w-8" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  BajanWheels
                </h3>
              </div>
              <p className="text-gray-400 text-sm mt-1">Transforming Transportation in Barbados</p>
            </div>

            <div className="flex space-x-6 text-gray-400">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" />
                hello@bajanwheels.com
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Bridgetown, Barbados
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 BajanWheels. All rights reserved. Built for the future of Caribbean mobility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;