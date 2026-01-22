'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface FloatingChatBotProps {
  darkMode?: boolean;
  resumeData: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
    summary: string;
    skills: Record<string, string[]>;
    projects?: Array<{
      title: string;
      description: string;
      technologies: string[];
      liveUrl?: string;
      githubUrl?: string;
    }>;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      degree: string;
      school: string;
      period: string;
      details: string;
    }>;
  };
}

export default function FloatingChatBot({ resumeData, darkMode = false }: FloatingChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi! I'm ${resumeData.name}'s AI assistant. I can tell you about their skills, projects, experience, and more. What would you like to know?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const userMessageLower = userMessage.toLowerCase();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      let response = '';

      // SKILLS - Enhanced response
      if (userMessageLower.includes('skill') || userMessageLower.includes('technology') || userMessageLower.includes('tech')) {
        const allSkills = Object.entries(resumeData.skills)
          .map(([category, skills]) => `${category}: ${skills.join(', ')}`)
          .join('\n\n');
        response = `${resumeData.name} has expertise in:\n\n${allSkills}\n\nThey're particularly strong in React and Next.js for building modern web applications!`;
      }
      
      // PROJECTS - NEW! Detailed project information
      else if (userMessageLower.includes('project')) {
        if (resumeData.projects && resumeData.projects.length > 0) {
          const projectList = resumeData.projects.map((project, index) => 
            `${index + 1}. ${project.title}\n   ${project.description}\n   Tech: ${project.technologies.join(', ')}`
          ).join('\n\n');
          response = `${resumeData.name} has worked on ${resumeData.projects.length} major projects:\n\n${projectList}\n\nVisit their GitHub to see more: ${resumeData.github}`;
        } else {
          response = `Check out ${resumeData.name}'s projects on GitHub: ${resumeData.github}`;
        }
      }
      
      // SPECIFIC PROJECT - Get details about a specific project
      else if (userMessageLower.includes('portfolio') || userMessageLower.includes('first project')) {
        if (resumeData.projects && resumeData.projects[0]) {
          const project = resumeData.projects[0];
          response = `${project.title}:\n\n${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\n${project.liveUrl ? `Live Demo: ${project.liveUrl}\n` : ''}${project.githubUrl ? `GitHub: ${project.githubUrl}` : ''}`;
        } else {
          response = `Ask me about ${resumeData.name}'s projects!`;
        }
      }
      
      // EXPERIENCE - Enhanced with more context
      else if (userMessageLower.includes('experience') || userMessageLower.includes('work') || userMessageLower.includes('job')) {
        const exp = resumeData.experience[0];
        response = `${resumeData.name} has professional experience as:\n\n${exp.title} at ${exp.company}\n${exp.period}\n\n${exp.description}\n\nWhile this role wasn't technical, ${resumeData.name} has built strong coding skills through personal projects and education!`;
      }
      
      // EDUCATION - Enhanced
      else if (userMessageLower.includes('education') || userMessageLower.includes('school') || userMessageLower.includes('university') || userMessageLower.includes('degree')) {
        const edu = resumeData.education[0];
        response = `${resumeData.name} is pursuing:\n\n${edu.degree}\n${edu.school}\n${edu.period}\n\n${edu.details}\n\nThey're gaining hands-on experience through projects and coursework in modern web development!`;
      }
      
      // CONTACT - Enhanced with all contact methods
      else if (userMessageLower.includes('contact') || userMessageLower.includes('email') || userMessageLower.includes('reach') || userMessageLower.includes('hire')) {
        response = `📧 Get in touch with ${resumeData.name}:\n\nEmail: ${resumeData.email}\nPhone: ${resumeData.phone}\nLocation: ${resumeData.location}\n\nConnect on:\n• LinkedIn: ${resumeData.linkedin}\n• GitHub: ${resumeData.github}\n• Website: ${resumeData.website}`;
      }
      
      // ABOUT/SUMMARY - Enhanced
      else if (userMessageLower.includes('about') || userMessageLower.includes('who') || userMessageLower.includes('summary') || userMessageLower.includes('tell me more')) {
        response = `${resumeData.summary}\n\nKey Highlights:\n• ${resumeData.title}\n• Proficient in ${Object.keys(resumeData.skills).slice(0, 3).join(', ')}\n• ${resumeData.projects ? resumeData.projects.length + ' projects completed' : 'Multiple projects on GitHub'}\n• Currently studying at ${resumeData.education[0].school}`;
      }
      
      // GITHUB/SOCIAL - Enhanced
      else if (userMessageLower.includes('github') || userMessageLower.includes('linkedin') || userMessageLower.includes('social')) {
        response = `🔗 Connect with ${resumeData.name}:\n\nGitHub: ${resumeData.github}\nLinkedIn: ${resumeData.linkedin}\nWebsite: ${resumeData.website}\n\nCheck out their code, projects, and professional network!`;
      }
      
      // WHAT CAN YOU DO - Helpful response about bot capabilities
      else if (userMessageLower.includes('what can you') || userMessageLower.includes('help')) {
        response = `I can help you learn about ${resumeData.name}! Try asking:\n\n• "Tell me about their skills"\n• "What projects have they built?"\n• "What's their experience?"\n• "How can I contact them?"\n• "Tell me about their education"\n• "Show me their GitHub"`;
      }
      
      // GREETING - Enhanced
      else if (userMessageLower.includes('hello') || userMessageLower.includes('hi') || userMessageLower.includes('hey')) {
        response = `Hello! 👋 I'm here to tell you about ${resumeData.name}, a talented ${resumeData.title}.\n\nAsk me about:\n• Technical skills\n• Projects\n• Experience\n• Education\n• Contact info`;
      }
      
      // THANK YOU - Polite response
      else if (userMessageLower.includes('thank') || userMessageLower.includes('thanks')) {
        response = `You're welcome! Feel free to ask me anything else about ${resumeData.name}, or reach out directly at ${resumeData.email}! 😊`;
      }
      
      // DEFAULT - Enhanced fallback with suggestions
      else {
        response = `${resumeData.name} is a ${resumeData.title} specializing in ${Object.keys(resumeData.skills).slice(0, 2).join(' and ')}.\n\n💡 Try asking about:\n• "What are their skills?"\n• "Show me their projects"\n• "What's their experience?"\n• "How can I contact them?"\n• "Tell me about their education"`;
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, something went wrong. Please try again!'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-4 right-4 w-12 h-12 ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-black text-white hover:bg-gray-800'
          } rounded-full shadow-lg hover:scale-110 transition-all flex items-center justify-center z-50`}
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Overlay for mobile */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat Window */}
          <div className={`fixed bottom-4 right-4 w-[calc(100vw-2rem)] max-w-[320px] h-[500px] sm:w-[320px] sm:h-[520px] ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-black'
          } border-2 rounded-lg shadow-2xl flex flex-col z-50`}>
            
            {/* Header */}
            <div className={`${
              darkMode ? 'bg-gray-700' : 'bg-black'
            } text-white p-3 flex items-center justify-between rounded-t-lg flex-shrink-0`}>
              <div className="flex items-center gap-2 min-w-0">
                <div className={`w-8 h-8 ${
                  darkMode ? 'bg-gray-600' : 'bg-white'
                } ${
                  darkMode ? 'text-white' : 'text-black'
                } rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {resumeData.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm truncate">{resumeData.name}</h3>
                  <p className="text-xs text-gray-300">AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`${
                  darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-800'
                } p-1 rounded transition-colors flex-shrink-0`}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-3 space-y-2 ${
              darkMode ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-xs ${
                      message.role === 'user'
                        ? darkMode
                          ? 'bg-gray-700 text-white rounded-br-none'
                          : 'bg-black text-white rounded-br-none'
                        : darkMode
                          ? 'bg-gray-800 border border-gray-600 text-gray-200 rounded-bl-none'
                          : 'bg-white border border-gray-300 text-black rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed break-words">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`${
                    darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
                  } border px-3 py-2 rounded-xl rounded-bl-none`}>
                    <div className="flex gap-1">
                      <div className={`w-1.5 h-1.5 ${
                        darkMode ? 'bg-gray-500' : 'bg-gray-400'
                      } rounded-full animate-bounce`}></div>
                      <div className={`w-1.5 h-1.5 ${
                        darkMode ? 'bg-gray-500' : 'bg-gray-400'
                      } rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                      <div className={`w-1.5 h-1.5 ${
                        darkMode ? 'bg-gray-500' : 'bg-gray-400'
                      } rounded-full animate-bounce`} style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-2 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } border-t rounded-b-lg flex-shrink-0`}>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className={`flex-1 px-3 py-1.5 border ${
                    darkMode 
                      ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-500 focus:border-gray-500' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-400 focus:border-black'
                  } rounded-full text-xs focus:outline-none transition-colors`}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-black hover:bg-gray-800'
                  } text-white p-1.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0`}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}