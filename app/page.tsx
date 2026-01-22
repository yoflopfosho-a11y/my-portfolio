import Link from 'next/link';
import { Sparkles, User } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-16 h-16 text-purple-600 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800">My Portfolio</h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Welcome to my personal portfolio with AI-powered resume
          </p>
        </div>

        {/* Feature Card */}
        <div className="grid gap-8 mb-12">
          {/* Resume Portfolio Card */}
          <Link href="/resume">
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all cursor-pointer transform hover: scale-105">
              <User className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Interactive Resume
              </h2>
              <p className="text-gray-600 mb-6">
                Explore my experience, skills, and education.  Chat with my AI assistant to learn more about my background! 
              </p>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                View Resume →
              </div>
            </div>
          </Link>
        </div>

        {/* About Section */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About This Project</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with Next.js 14, TypeScript, Tailwind CSS, and powered by Google Gemini AI 
            for an interactive chat experience about my professional background. 
          </p>
        </div>
      </div>
    </main>
  );
}