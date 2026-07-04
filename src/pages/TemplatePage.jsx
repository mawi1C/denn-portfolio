import React from 'react';
import { motion } from 'framer-motion';

const TemplatePage = () => {
  const templateData = [
    {
      id: 1,
      title: "Portfolio Template",
      description: "A clean, minimalist personal portfolio design.",
      link: "https://denn-portfolio.vercel.app/",
      tags: ["React", "Vite", "Tailwind"]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8 max-w-4xl mx-auto"
    >
      {/* Header with Subtitle */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The dev lab</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          A curated collection of modular design assets and AI-integrated prototypes. 
          Click any project to inspect the live implementation.
        </p>
      </div>

      {/* Smaller Card Container */}
      <div className="max-w-sm">
        {templateData.map((template) => (
          <a 
            key={template.id}
            href={template.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all"
          >
            {/* Forced Desktop Viewport via Scaling */}
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 relative overflow-hidden">
              <div style={{ 
                width: '1280px', 
                height: '640px', 
                transform: 'scale(0.31)', 
                transformOrigin: '0 0'
              }}>
                <iframe 
                  src={template.link} 
                  className="w-full h-full border-0 pointer-events-none" 
                  title="Live Preview"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{template.description}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default TemplatePage;