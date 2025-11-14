import React from 'react';
import { Shield, Radio, Target, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'MIL-Grade',
      desc: 'Military-grade reliability'
    },
    {
      icon: Radio,
      title: 'Secure',
      desc: 'Encrypted communications'
    },
    {
      icon: Target,
      title: 'Precision',
      desc: 'Sub-meter accuracy'
    },
    {
      icon: Zap,
      title: 'Autonomous',
      desc: 'Full autonomy stack'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
       
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm text-blue-400 font-medium">About VyomGarud</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Built for the Mission
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            VyomGarud builds reliable, autonomous UAV platforms for intelligence,
            surveillance and precision missions — engineered for harsh conditions
            and secure communications.
          </p>
        </div>

       
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-slate-900/50 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Engineering Excellence
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Our platforms are designed to operate in the most demanding environments, 
                  from extreme temperatures to hostile territories. Every system is built with 
                  redundancy, security, and mission success as the top priorities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
                    Extreme Weather
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
                    Long Endurance
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
                    Fail-Safe Systems
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    
                    <svg className="w-full h-full text-blue-500/20" viewBox="0 0 200 200" fill="none">
                      <path d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M100 60 L130 80 L130 120 L100 140 L70 120 L70 80 Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}