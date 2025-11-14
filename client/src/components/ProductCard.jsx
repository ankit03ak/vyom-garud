import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProductCard({ title, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
      
      
      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)]"></div>
        </div>

        <div className="relative z-10 flex flex-col h-full">
          
          <div className="mb-6">
            <div className="relative inline-block">
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-md transition-all duration-300 ${isHovered ? 'opacity-75 scale-110' : 'opacity-0'}`}></div>
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-blue-400" />
              </div>
            </div>
          </div>

         
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          
          <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
            {desc}
          </p>

          
          <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
            <span>Learn more</span>
            <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
          </div>
        </div>

        
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
}