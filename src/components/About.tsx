import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Coffee, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0, awards: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Award, label: 'Projects Completed', value: 150, key: 'projects' },
    { icon: Users, label: 'Happy Clients', value: 98, key: 'clients' },
    { icon: Coffee, label: 'Years Experience', value: 8, key: 'experience' },
    { icon: Clock, label: 'Awards Won', value: 12, key: 'awards' }
  ];

  const skills = [
    { name: 'Frontend Development', percentage: 95 },
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Backend Development', percentage: 85 },
    { name: 'Mobile Development', percentage: 80 },
    { name: 'DevOps & Cloud', percentage: 75 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
      }, 30);
    });
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of designers and developers creating exceptional digital experiences 
            that combine beautiful aesthetics with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Crafting Digital Excellence Since 2016
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a simple mission: to bridge the gap between stunning design 
                and powerful functionality. Today, we're proud to have helped hundreds of businesses 
                transform their digital presence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in the power of collaboration, innovation, and attention to detail. 
                Every project is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'User-centered design approach',
                'Cutting-edge technology stack',
                'Agile development methodology',
                '24/7 support and maintenance'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {counters[stat.key as keyof typeof counters]}+
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`bg-white rounded-3xl p-12 shadow-xl border border-gray-100 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${800 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;