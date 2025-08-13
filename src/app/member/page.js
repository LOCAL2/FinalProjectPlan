'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MemberPage() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (memberIndex) => {
    setImageErrors(prev => ({ ...prev, [memberIndex]: true }));
  };

  const members = [
    {
      name: "วรเดช พันธ์พืช",
      nickname: "ทาม",
      role: "Developer & Hardware Specialist",
      image: "/images/tam.jpg",
      description: "รับผิดชอบการพัฒนาโปรแกรมและเชื่อมต่อฮาร์ดแวร์",
             skills: ["ESP32 Programming", "Sensor Integration", "Circuit Design"]
    },
    {
      name: "นภัสพล ผู้แสนสะอาด",
      nickname: "สตางค์",
      role: "Project Leader & System Architect",
      image: "/images/stang.jpg",
      description: "ผู้นำทีมและออกแบบระบบโดยรวมของโปรเจค",
             skills: ["Project Management"],
       highlight: true
    },
    {
      name: "ภูมิรพี พรหมมาศ",
      nickname: "ภูมิ",
      role: "รองที่ปรึกษา",
      image: "/images/phoom.jpg",
      description: "ออกแบบและพัฒนาส่วนติดต่อผู้ใช้",
      skills: ["ให้คำปรึกษา"]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Meet Our Team
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind the Smoke Detector
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900/40 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
                         {/* Left Member - Order 2 on mobile */}
             <div className="order-2 lg:order-1 group flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-blue-500/30 transition-all duration-500 w-full max-w-sm relative">
               {/* Badge */}
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                 มือซ้าย
               </div>
               <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500 group-hover:shadow-2xl group-hover:shadow-blue-400/50 transition-all duration-500 mb-4 sm:mb-6">
                {!imageErrors[0] ? (
                  <Image
                    src={members[0].image}
                    alt={members[0].name + ' (' + members[0].nickname + ')'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => handleImageError(0)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-3xl">
                    {members[0].nickname.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white mb-2">{members[0].name}</div>
                <div className="text-blue-400 font-medium text-base sm:text-lg mb-3">({members[0].nickname})</div>
                <div className="text-orange-400 font-semibold text-sm sm:text-base mb-3">{members[0].role}</div>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">{members[0].description}</p>
                
                {/* Skills */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">ทักษะหลัก</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {members[0].skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </div>

                         {/* Center Member (highlighted) - Order 1 on mobile */}
             <div className="order-1 lg:order-2 group flex flex-col items-center bg-gradient-to-b from-blue-800 via-gray-900 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 sm:border-4 border-orange-500 hover:shadow-orange-400/50 transition-all duration-500 z-10 w-full max-w-sm relative">
               {/* Leader Badge */}
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                 Project Leader
               </div>
               <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 sm:border-4 border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-400/60 transition-all duration-500 mb-4 sm:mb-6">
                {!imageErrors[1] ? (
                  <Image
                    src={members[1].image}
                    alt={members[1].name + ' (' + members[1].nickname + ')'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => handleImageError(1)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-5xl">
                    {members[1].nickname.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white drop-shadow mb-2">{members[1].name}</div>
                <div className="text-orange-400 font-bold text-xl mb-3">({members[1].nickname})</div>
                <div className="text-orange-300 font-semibold mb-3">{members[1].role}</div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{members[1].description}</p>
                
                {/* Skills */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">ทักษะหลัก</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {members[1].skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </div>

                         {/* Right Member - Order 3 on mobile */}
             <div className="order-3 lg:order-3 group flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-blue-500/30 transition-all duration-500 w-full max-w-sm relative">
               {/* Badge */}
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                 มือขวา
               </div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500 group-hover:shadow-2xl group-hover:shadow-blue-400/50 transition-all duration-500 mb-4 sm:mb-6">
                {!imageErrors[2] ? (
                  <Image
                    src={members[2].image}
                    alt={members[2].name + ' (' + members[2].nickname + ')'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => handleImageError(2)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-3xl">
                    {members[2].nickname.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white mb-2">{members[2].name}</div>
                <div className="text-blue-400 font-medium text-base sm:text-lg mb-3">({members[2].nickname})</div>
                <div className="text-orange-400 font-semibold text-sm sm:text-base mb-3">{members[2].role}</div>
                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">{members[2].description}</p>
                
                {/* Skills */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">ทักษะหลัก</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {members[2].skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
