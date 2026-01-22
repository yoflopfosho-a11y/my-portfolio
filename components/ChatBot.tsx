'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatBotProps {
  darkMode:  boolean;
  resumeData:  any;
}

export default function ChatBot({ darkMode, resumeData }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role:  'assistant',
      content:  `👋 Hi! I'm an AI assistant who knows all about ${resumeData.name}'s professional background.  Ask me anything about their experience, skills, education, or projects!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef. current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
  if (!input. trim() || isLoading) return;

  const userMessage = input.trim();
  const userMessageLower = userMessage. toLowerCase();
  setInput('');
  setMessages(prev => [... prev, { role: 'user', content: userMessage }]);
  setIsLoading(true);

  // Simulate AI thinking delay
  await new Promise(resolve => setTimeout(resolve, 1200));

  try {
    let response = '';

    // Smart keyword-based responses
    if (userMessageLower.includes('skill') || userMessageLower.includes('technology') || userMessageLower. includes('tech')) {
      const allSkills = Object.entries(resumeData. skills)
        .map(([category, skills]) => `**${category}:** ${(skills as string[]).join(', ')}`)
        .join('\n\n');
      response = `💻 Here are ${resumeData. name}'s technical skills:\n\n${allSkills}\n\nThey have a diverse skill set! 🚀`;
    }
    else if (userMessageLower.includes('experience') || userMessageLower.includes('work') || userMessageLower.includes('job')) {
      const exp = resumeData.experience[0];
      response = `💼 ${resumeData.name} has worked as **${exp.title}** at **${exp.company}** (${exp.period}).\n\n${exp.description}\n\nThey have ${resumeData. experience.length} professional experiences listed! `;
    }
    else if (userMessageLower.includes('education') || userMessageLower. includes('school') || userMessageLower.includes('university') || userMessageLower.includes('degree') || userMessageLower.includes('study')) {
      const edu = resumeData.education[0];
      response = `🎓 ${resumeData.name} studied **${edu.degree}** at **${edu.school}** (${edu.period}).\n\n${edu.details}`;
    }
    else if (userMessageLower.includes('project')) {
      response = `🚀 ${resumeData.name} has worked on several exciting projects!  You can explore their work on GitHub at ${resumeData.github}. They love building innovative solutions and contributing to open source!`;
    }
    else if (userMessageLower.includes('contact') || userMessageLower.includes('email') || userMessageLower.includes('reach') || userMessageLower.includes('phone')) {
      response = `📧 You can reach ${resumeData.name} at:\n\n**Email:** ${resumeData.email}\n**Phone:** ${resumeData.phone}\n**Location:** ${resumeData.location}\n\nFeel free to get in touch! 😊`;
    }
    else if (userMessageLower.includes('about') || userMessageLower.includes('who') || userMessageLower.includes('summary') || userMessageLower.includes('background')) {
      response = `👋 ${resumeData.summary}\n\n${resumeData.name} is a passionate ${resumeData.title} who loves tackling challenging problems! `;
    }
    else if (userMessageLower.includes('github') || userMessageLower. includes('linkedin') || userMessageLower.includes('social') || userMessageLower.includes('portfolio')) {
      response = `🔗 Connect with ${resumeData.name}:\n\n**GitHub:** ${resumeData. github}\n**LinkedIn:** ${resumeData.linkedin}\n**Website:** ${resumeData.website}\n\nCheck out their work online! `;
    }
    else if (userMessageLower.includes('hire') || userMessageLower. includes('available') || userMessageLower.includes('looking') || userMessageLower.includes('opportunity')) {
      response = `✨ Yes! ${resumeData.name} is open to new opportunities. With expertise in ${Object.keys(resumeData.skills).slice(0, 3).join(', ')}, they would be a valuable addition to any team. Reach out at ${resumeData.email}! 💼`;
    }
    else if (userMessageLower.includes('hello') || userMessageLower.includes('hi') || userMessageLower.includes('hey')) {
      response = `👋 Hello! I'm here to tell you all about ${resumeData.name}!  Ask me about their skills, experience, education, projects, or how to contact them!`;
    }
    else {
      // Default intelligent response
      response = `🤔 That's an interesting question! ${resumeData. name} is a talented ${resumeData.title} with expertise in ${Object.keys(resumeData.skills).slice(0, 3).join(', ')}.\n\nTry asking about:\n• Skills & technologies\n• Work experience\n• Education\n• Projects\n• Contact information`;
    }

    setMessages(prev => [... prev, { role: 'assistant', content: response }]);
  } catch (error) {
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: '❌ Sorry, something went wrong. Please try again!'
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
    <div className={`rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`} style={{ height: '700px' }}>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bot className="w-8 h-8" />
            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold">AI Assistant</h3>
            <p className="text-sm text-purple-100">Powered by Google Gemini</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages. map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${
              message.role === 'user' ?  'justify-end' : 'justify-start'
            } animate-fade-in`}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            <div
              className={`max-w-[85%] sm:max-w-[80%] p-4 rounded-2xl shadow-md ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-none'
                  : darkMode
                  ? 'bg-gray-700 text-gray-100 rounded-bl-none'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none'
              }`}
            >
              <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
            </div>
            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className={`p-4 rounded-2xl rounded-bl-none shadow-md ${
              darkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className={`p-4 border-t ${
        darkMode ?  'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about skills, experience..."
            className={`flex-1 px-4 py-3 rounded-full outline-none transition-all focus:ring-2 focus:ring-purple-500 ${
              darkMode
                ? 'bg-gray-700 text-white placeholder-gray-400'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500'
            }`}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full hover: shadow-lg transition-all disabled: opacity-50 disabled:cursor-not-allowed hover:scale-105"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className={`text-xs mt-2 text-center ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}