import React, { useState } from 'react';
import { Mail, MessageCircle, Headphones, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      description: 'Get a response within 24 hours',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700',
      action: 'contact@vyomgarud.com'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with our team instantly',
      color: 'green',
      gradient: 'from-green-600 to-green-700',
      action: 'Start Chat'
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Support Ticket',
      description: 'Technical support & inquiries',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700',
      action: 'Open Ticket'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your operations? Our team is here to help you deploy VyomGarud UAV systems.
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              onMouseEnter={() => setHoveredButton(method.id)}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative"
            >
             
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
             
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
               
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-xl blur-md transition-opacity duration-300 ${hoveredButton === method.id ? 'opacity-75' : 'opacity-0'}`}></div>
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} bg-opacity-20 border border-${method.color}-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={`w-7 h-7 text-${method.color}-400`} />
                    </div>
                  </div>
                </div>

               
                <h3 className="text-2xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {method.description}
                </p>

               
                <button className={`w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${method.gradient} hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}>
                  <span>{method.action}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

       
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
             
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Enterprise Solutions
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Looking for custom configurations or fleet deployments? Our enterprise team can help you design the perfect solution for your mission requirements.
                </p>
                <ul className="space-y-3">
                  {['Custom payload integration', 'Fleet management systems', 'Dedicated technical support', 'Training & certification'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="p-6 rounded-xl bg-slate-950/50 border border-blue-500/20 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">Your Name</label>
                      <div className="h-10 bg-slate-800/50 rounded-lg border border-blue-500/20"></div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">Email Address</label>
                      <div className="h-10 bg-slate-800/50 rounded-lg border border-blue-500/20"></div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">Message</label>
                      <div className="h-24 bg-slate-800/50 rounded-lg border border-blue-500/20"></div>
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
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