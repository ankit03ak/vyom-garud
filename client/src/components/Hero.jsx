import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="flex-1 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm text-blue-300 font-medium">Next-Gen UAV Technology</span>
            </div>

           
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black">
                <span className="block text-white mb-2">VyomGarud</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Autonomous UAV
                </span>
                <span className="block text-white">Systems</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Mission-ready autonomous platforms with MIL-grade reliability. 
                Engineered for intelligence, surveillance, and precision operations.
              </p>
            </div>

           
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Request Demo
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#capabilities"
                className="group px-8 py-4 rounded-lg font-semibold text-white border-2 border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Capabilities
              </a>
            </div>

          
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-gray-500">Missions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </div>

         
          <div className="flex-1 w-full max-w-2xl">
            <div 
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
           
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-blue-500/20 shadow-2xl shadow-blue-500/20">
                
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-8 border-2 border-blue-500/50 rounded-full"></div>
                    
                   
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>
                        <div className="relative bg-slate-900 rounded-full p-6 border border-blue-500/50">
                          <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-blue-500/50"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-blue-500/50"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-blue-500/50"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-blue-500/50"></div>

             
                <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-sm border border-blue-500/30 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-400">STATUS</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">OPERATIONAL</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-slate-950/80 backdrop-blur-sm border border-blue-500/30 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-400">ALTITUDE</div>
                  <div className="text-lg font-bold text-white mt-1">500m</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}