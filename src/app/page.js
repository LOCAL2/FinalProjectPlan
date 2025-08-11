'use client';
import Link from 'next/link';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  useScrollAnimations();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
        
        {/* Animated Background Elements - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Main Title with Enhanced Design */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
              <span className="mx-4 text-sm font-semibold text-orange-400 tracking-widest uppercase">
                โปรเจคจบ
              </span>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none" data-animation="fade-in-up" data-delay="0ms">
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse-glow">
                SMOKE
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 tracking-wider mt-2">
                DETECTOR
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle with Tech Stack */}
          <div className="mb-8 sm:mb-12" data-animation="fade-in-up" data-delay="200ms">
            <div className="bg-gradient-to-r from-gray-800/60 via-gray-700/60 to-gray-800/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-600/40 shadow-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 leading-relaxed">
                {t('intelligentSystem')}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <div>
                      <span className="text-green-400 font-bold text-lg">ESP32</span>
                      <p className="text-gray-300 text-sm">ไมโครคอนโทรลเลอร์ควบคุมระบบหลัก</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                    <div>
                      <span className="text-orange-400 font-bold text-lg">MQ-2 & MQ-135</span>
                      <p className="text-gray-300 text-sm">เซ็นเซอร์ตรวจจับควันบุหรี่และแก๊สคุณภาพสูง</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                    <div>
                      <span className="text-blue-400 font-bold text-lg">LCD TFT Display</span>
                      <p className="text-gray-300 text-sm">หน้าจอแสดงผลข้อมูลเรียลไทม์</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800/40 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                    <div>
                      <span className="text-purple-400 font-bold text-lg">IoT Connectivity</span>
                      <p className="text-gray-300 text-sm">เชื่อมต่อ WiFi และ Bluetooth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              คุณสมบัติเด่น
            </h2>
            <p className="text-xl text-gray-300">
              ระบบตรวจจับควันบุหรี่อัจฉริยะที่มาพร้อมกับเทคโนโลยีล่าสุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real-time Monitoring */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">การตรวจสอบแบบเรียลไทม์</h3>
              <p className="text-gray-300">แสดงผลข้อมูลการตรวจจับควันบุหรี่แบบเรียลไทม์ผ่านหน้าจอ LCD TFT</p>
            </div>

            {/* High Accuracy */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ความแม่นยำสูง</h3>
              <p className="text-gray-300">ใช้เซ็นเซอร์ MQ-2 และ MQ-135 ที่มีความแม่นยำในการตรวจจับควันบุหรี่สูง</p>
            </div>

            {/* IoT Connectivity */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">เชื่อมต่อ IoT</h3>
              <p className="text-gray-300">ใช้ ESP32 ที่รองรับการเชื่อมต่อ WiFi และ Bluetooth สำหรับการควบคุมระยะไกล</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
