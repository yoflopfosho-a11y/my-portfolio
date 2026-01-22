'use client';

interface ResumeSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  darkMode: boolean;
}

export default function ResumeSection({ icon, title, children, darkMode }: ResumeSectionProps) {
  return (
    <div className={`p-6 sm:p-8 rounded-3xl shadow-xl transition-all hover:shadow-2xl ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-600`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}