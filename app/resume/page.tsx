'use client';

import { useState } from 'react';
import FloatingChatBot from '../../components/FloatingChatBot';
import { MapPin, Mail, Github, Linkedin, Globe, Moon, Sun, Briefcase, GraduationCap, Code2, User, Facebook, Instagram } from 'lucide-react';

export default function ResumePage() {
  const [darkMode, setDarkMode] = useState(false);

  const resumeData = {
    name: "Christian John F. Noel",
    title: "Front-end Developer / Full-Stack Developer",
    location: "Bulacan, Philippines",
    email: "Chrstnjhnl@gmail.com",
    phone: "+63 906 888 1801",
    github: "github.com/yoflopfosho",
    linkedin: "https://www.linkedin.com/in/christian-noel-a59b0b323/",
    website: "https://yourportfolio.com",
    facebook: "facebook.com/yoflopfosho",
    instagram: "instagram.com/chrstnjhnnl",
    summary: "Front-end Developer specializing in React and Next.js with hands-on experience building responsive web applications. Currently completing BS Information Technology at STI College. Passionate about creating intuitive user interfaces and solving complex problems through clean, efficient code.",
    
    skills: {
      "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
      "Backend": ["Node.js", "Express", "Python", "REST APIs"],
      "Database": ["PostgreSQL", "MongoDB", "MySQL"],
      "Tools & Others": ["Git", "VS Code", "Figma"]
    },

    projects: [
      {
        title: "Charkool Beach Resort - Booking Management System with 3D Virtual Tour",
        description: "Developed a web-based booking management system with an interactive 3D virtual tour for Charkool Beach Resort, designing the UI/UX for the landing and guest pages to ensure clean, user-friendly layouts, improved navigation and visual consistency, and enhanced accessibility and overall usability.",
        technologies: ["Next.js", "React"],
        features: [
          "Responsive design on every devices",
          "Pre-defined chatbot for the inquiries",
          "Interactive 3D virtual tour for the customers/guests",
          "Real-time availability rooms"
        ],
        liveUrl: "http://charkoolbeachresort.com",
        githubUrl: "https://github.com/yoflopfosho/charkool-beach-resort"
      },
      {
        title: "AI-Powered Portfolio Website",
        description: "Interactive portfolio with integrated AI chatbot for resume queries, featuring dark/light mode toggle and responsive design.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        features: [
          "Responsive design with dark mode support",
          "AI chatbot for interactive resume exploration",
          "Dynamic profile image hover effects",
          "Mobile-first approach with optimized performance"
        ],
        liveUrl: "https://your-portfolio.com",
        githubUrl: "https://github.com/yoflopfosho/portfolio"
      }
    ],
    
    experience: [
      {
        title: "Secretary",
        company: "Most Sacred Heart of Jesus Parish",
        period: "November 2020 - February 2021",
        description: "Managed 50+ weekly appointments for parish services including car blessings, house blessings, weddings, and religious ceremonies. Streamlined scheduling process and maintained accurate records."
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Science in Information Technology",
        school: "STI College San Jose Del Monte",
        period: "2022 - 2026",
        details: "Focus on software engineering and web development.",
        skillsLearned: {
          "Technical": ["Web Development", "Database Design", "Software Engineering", "System Analysis"],
          "Programming": ["Java", "C++", "Python", "JavaScript"],
          "Tools": ["Git", "Visual Studio", "MySQL Workbench"]
        }
      }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 z-40 p-2 rounded-lg transition-all ${
          darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
        } shadow-md`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Header Section */}
        <div className={`rounded-2xl p-8 mb-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-sm`}>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            
            {/* Profile Image with Hover Effect */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer shadow-lg">
              <img 
                src="/images/profile-default.jpg"
                alt="Christian John F. Noel Default" 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img 
                src="/images/profile-hover.jpg"
                alt="Christian John F. Noel Hover" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Name & Title */}
            <div className="flex-1">
              <h1 className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {resumeData.name}
              </h1>
              <p className={`text-lg mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {resumeData.title}
              </p>
              <p className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                <MapPin className="w-4 h-4" />
                {resumeData.location}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a 
                  href={`mailto:${resumeData.email}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    darkMode 
                      ? 'bg-white text-gray-900 hover:bg-gray-100' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a 
                  href={`https://${resumeData.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    darkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Summary Section */}
            <section className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <User className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </div>
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Professional Summary
                </h2>
              </div>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {resumeData.summary}
              </p>
            </section>

            {/* 2. Skills Section */}
            <section className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Code2 className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </div>
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Technical Skills
                </h2>
              </div>
              <div className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className={`text-xs font-bold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-lg text-xs font-medium ${
                            darkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Projects Section */}
            <section className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Code2 className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </div>
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Projects
                </h2>
              </div>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl border ${
                      darkMode 
                        ? 'border-gray-700 hover:bg-gray-700' 
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1.5 rounded-lg transition-colors ${
                              darkMode 
                                ? 'hover:bg-gray-600 text-gray-400 hover:text-white' 
                                : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                            }`}
                            title="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-1.5 rounded-lg transition-colors ${
                              darkMode 
                                ? 'hover:bg-gray-600 text-gray-400 hover:text-white' 
                                : 'hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                            }`}
                            title="View Live Demo"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            darkMode 
                              ? 'bg-gray-700 text-blue-400' 
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span className="font-semibold">Key Features:</span>
                      <ul className="mt-1 ml-4 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="list-disc">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Experience Section */}
            <section className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Briefcase className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </div>
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Work Experience
                </h2>
              </div>
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-gray-300">
                    <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-1.5"></div>
                    <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.company}
                    </p>
                    <p className={`text-xs mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {exp.period}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Education Section */}
            <section className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <GraduationCap className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                </div>
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.school}
                    </p>
                    <p className={`text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {edu.period}
                    </p>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.details}
                    </p>
                    
                    {edu.skillsLearned && (
                      <div className="mt-4 space-y-3">
                        <h4 className={`text-xs font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                          Skills Acquired
                        </h4>
                        {Object.entries(edu.skillsLearned).map(([category, skills]) => (
                          <div key={category}>
                            <p className={`text-xs mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              {category}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {(skills as string[]).map((skill, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 rounded text-xs ${
                                    darkMode 
                                      ? 'bg-gray-700 text-gray-400' 
                                      : 'bg-gray-50 text-gray-600'
                                  }`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            <section className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <h3 className={`text-sm font-bold mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a 
                  href={`mailto:${resumeData.email}`}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  title="Gmail"
                >
                  <Mail className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-red-400' : 'text-gray-600 group-hover:text-red-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Gmail
                  </span>
                </a>
                
                <a 
                  href={`tel:${resumeData.phone}`}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  title="Phone"
                >
                  <svg 
                    className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-green-400' : 'text-gray-600 group-hover:text-green-600'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone
                  </span>
                </a>

                <a 
                  href={`https://${resumeData.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  title="Facebook"
                >
                  <Facebook className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Facebook
                  </span>
                </a>
                
                <a 
                  href={`https://${resumeData.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  title="Instagram"
                >
                  <Instagram className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-pink-400' : 'text-gray-600 group-hover:text-pink-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Instagram
                  </span>
                </a>
                
                <a 
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  title="LinkedIn"
                >
                  <Linkedin className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    LinkedIn
                  </span>
                </a>
                
                <a 
                  href={resumeData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                  title="Website"
                >
                  <Globe className={`w-5 h-5 ${darkMode ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Website
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Floating AI Chatbot */}
      <FloatingChatBot resumeData={resumeData} darkMode={darkMode} />
    </div>
  );
}