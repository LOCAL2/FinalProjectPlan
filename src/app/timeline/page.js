'use client';
import { useEffect, useRef } from 'react';

export default function TimelinePage() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0', 'translate-y-10');

            // Add staggered animation to child elements
            const childElements = entry.target.querySelectorAll('.stagger-child');
            childElements.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
                child.classList.remove('opacity-0', 'translate-x-4');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      item.style.transitionDelay = `${index * 200}ms`;
      observer.observe(item);

      // Add initial state to child elements
      const childElements = item.querySelectorAll('.stagger-child');
      childElements.forEach((child) => {
        child.classList.add('opacity-0', 'translate-x-4', 'transition-all', 'duration-500');
      });
    });

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const timelineData = [
    {
      phase: "จุดเริ่มต้น",
      title: "Project Start",
      date: "25/08/65",
      description: "เริ่มต้นการวางแผนและออกแบบระบบตรวจจับควันบุหรี่",
      activities: [
        "ศึกษาข้อมูลและเทคโนโลยีที่เกี่ยวข้อง",
        "เลือกอุปกรณ์และเซ็นเซอร์ที่เหมาะสม",
        "วางแผนการพัฒนาโปรเจค"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11.81C11.42 22.34 11.17 21.6 11.07 20.81C9.5 20.5 8.21 19.31 7.76 17.77C7.32 16.23 7.79 14.53 9 13.5V9H21ZM11 11H19V13H11V11ZM11 15H17V17H11V15ZM20.5 18.5L19.09 17.09L17 19.17L15.91 18.09L14.5 19.5L17 22L20.5 18.5Z"/>
        </svg>
      ),
      color: "from-green-500 to-blue-500",
      status: "completed"
    },
    {
      phase: "ระหว่างทำ",
      title: "In Progress",
      date: "สิงหาคม - กันยายน",
      description: "การพัฒนาและทดสอบระบบตรวจจับควันบุหรี่",
      activities: [
        "เขียนโค้ดสำหรับ ESP32",
        "เชื่อมต่อเซ็นเซอร์ MQ-2 และ MQ-135",
        "พัฒนาโปรแกรมสำหรับ LCD TFT",
        "ทดสอบการทำงานของระบบ"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.5 11C15.5 9.62 14.38 8.5 13 8.5C11.62 8.5 10.5 9.62 10.5 11C10.5 12.38 11.62 13.5 13 13.5C14.38 13.5 15.5 12.38 15.5 11ZM8.5 11C8.5 9.62 7.38 8.5 6 8.5C4.62 8.5 3.5 9.62 3.5 11C3.5 12.38 4.62 13.5 6 13.5C7.38 13.5 8.5 12.38 8.5 11ZM12 14C9.79 14 8 15.79 8 18H16C16 15.79 14.21 14 12 14Z"/>
          <circle cx="12" cy="6" r="1.5" opacity="0.7"/>
          <circle cx="8" cy="8" r="1" opacity="0.5"/>
          <circle cx="16" cy="8" r="1" opacity="0.5"/>
          <circle cx="10" cy="10" r="0.8" opacity="0.3"/>
          <circle cx="14" cy="10" r="0.8" opacity="0.3"/>
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      status: "in-progress"
    },
    {
      phase: "จุดสิ้นสุด",
      title: "Completion",
      date: "ปลายเดือนกันยายน",
      description: "เสร็จสิ้นการพัฒนาและนำระบบไปใช้งานจริง",
      activities: [
        "ปรับแต่งและเพิ่มประสิทธิภาพระบบ",
        "ทดสอบในสภาพแวดล้อมจริง",
        "จัดทำเอกสารและคู่มือการใช้งาน",
        "นำเสนอผลงานและส่งมอบระบบ"
      ],
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          <path d="M19 14L20.5 18.5L22 14L20.5 9.5L19 14Z" opacity="0.8"/>
          <path d="M5 14L6.5 18.5L8 14L6.5 9.5L5 14Z" opacity="0.8"/>
          <circle cx="12" cy="20" r="2"/>
          <path d="M9 18C9 16.9 9.9 16 11 16H13C14.1 16 15 16.9 15 18V22H9V18Z"/>
          <rect x="10" y="19" width="4" height="1" opacity="0.6"/>
          <rect x="10.5" y="20.5" width="3" height="0.5" opacity="0.4"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      status: "upcoming"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.6);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.7s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .timeline-item:hover .timeline-node {
          animation: pulse-glow 1s ease-in-out infinite;
        }
      `}</style>

      {/* Header Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Project Timeline
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Follow the development journey of our Smoke Detector from concept to completion
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-800/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 via-orange-500 to-purple-500 opacity-20 blur-sm"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-orange-400 to-purple-400 opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full">
              {/* Primary Line */}
              <div className="w-full h-full bg-gradient-to-b from-green-500 via-orange-500 to-purple-500 rounded-full shadow-2xl shadow-orange-500/30"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-green-500/40 via-orange-500/40 to-purple-500/40 rounded-full blur-lg"></div>
              
              {/* Animated Pulse */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-green-500/20 via-orange-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
            </div>

            {/* Timeline Items - Responsive */}
            <div className="space-y-16 sm:space-y-24 lg:space-y-32 relative">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } group`}
                >
                  {/* Enhanced Timeline Node - Responsive */}
                  <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20 mb-6 lg:mb-0">
                    {/* Outer Ring */}
                    <div className="timeline-node w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-4 border-gray-700 relative transition-all duration-500 group-hover:scale-110 mx-auto lg:mx-0">
                      {/* Inner Glow Ring */}
                      <div className={`absolute inset-2 bg-gradient-to-r ${item.color} rounded-full blur-md opacity-60 animate-pulse`}></div>

                      {/* Main Node */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-white relative z-10 transition-all duration-300`}>
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>

                        {/* Icon */}
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>

                      {/* Ripple Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full opacity-20 animate-ping group-hover:animate-pulse`}></div>
                    </div>

                    {/* Connection Lines to Content */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'left-full from-orange-500 to-transparent' 
                        : 'right-full from-transparent to-orange-500'
                    }`}></div>
                  </div>

                  {/* Enhanced Content Card - Responsive */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} px-4 lg:px-0`}>
                    <div className="bg-gray-800/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden transform hover:-translate-y-2">
                      {/* Card Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Phase Badge */}
                        <div className="stagger-child inline-flex items-center mb-6">
                          <span className={`bg-gradient-to-r ${item.color} bg-opacity-20 text-white border border-current border-opacity-30 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300`}>
                            {item.phase}
                          </span>
                        </div>

                        {/* Title and Date */}
                        <h3 className="stagger-child text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{item.title}</h3>
                        <p className="stagger-child text-orange-400 font-semibold mb-4 text-lg">{item.date}</p>

                        {/* Description */}
                        <p className="stagger-child text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                        {/* Enhanced Activities */}
                        <div className="stagger-child">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <svg className="w-5 h-5 text-orange-400 mr-2 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            กิจกรรมที่ทำ
                          </h4>
                          <ul className="space-y-3">
                            {item.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="stagger-child flex items-start group/item hover:bg-gray-700/30 rounded-lg p-2 -m-2 transition-all duration-300">
                                <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}></div>
                                <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200 leading-relaxed">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Connection Point */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
