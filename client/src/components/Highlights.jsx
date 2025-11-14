import React from 'react';
import { Shield, Cpu, Lock } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      icon: Shield,
      title: 'MIL Spec Reliability',
      description: 'Built to operate in extreme conditions.',
      gradient: 'from-blue-500 to-blue-600',
      delay: '0s'
    },
    {
      icon: Cpu,
      title: 'End-to-end Autonomy',
      description: 'Advanced autonomy and safe operations.',
      gradient: 'from-cyan-500 to-cyan-600',
      delay: '0.2s'
    },
    {
      icon: Lock,
      title: 'Secure Comms',
      description: 'Encrypted links and hardened systems.',
      gradient: 'from-blue-600 to-cyan-600',
      delay: '0.4s'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-400 font-medium">Why Choose VyomGarud</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Unmatched Excellence
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-leading technology meets operational excellence
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: highlight.delay }}
            >
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
              
            
              <div className="relative h-full p-8 rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
               
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
               
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                
                <div className="relative z-10">
                  
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${highlight.gradient} bg-opacity-10 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <highlight.icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {highlight.title}
                  </h3>

                 
                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>

                  
                  <div className="mt-6 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${highlight.gradient} rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                  </div>
                </div>

                
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-blue-500/10 group-hover:border-blue-500/30 transition-colors rounded-br-2xl"></div>
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-blue-500/10 group-hover:border-blue-500/30 transition-colors rounded-tl-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 rounded-2xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-blue-500/20 backdrop-blur-sm">
            <div className="text-left">
              <p className="text-gray-400 mb-2">Ready to deploy?</p>
              <h4 className="text-2xl font-bold text-white">Experience VyomGarud in action</h4>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105 whitespace-nowrap"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}