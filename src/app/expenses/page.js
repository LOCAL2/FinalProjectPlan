'use client';
import { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';

export default function ExpensesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [startCountUp, setStartCountUp] = useState(false);
  const totalRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for CountUp animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCountUp(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (totalRef.current) {
      observer.observe(totalRef.current);
    }

    return () => {
      if (totalRef.current) {
        observer.unobserve(totalRef.current);
      }
    };
  }, []);

  const expenseItems = [
    {
      id: 1,
      name: "ESP32 Development Board",
      nameEn: "ESP32",
      quantity: 1,
      pricePerUnit: 350,
      image: "/images/esp32.jpg",
      category: "Microcontroller"
    },
    {
      id: 2,
      name: "MQ-2 Gas Sensor",
      nameEn: "MQ-2 Sensor",
      quantity: 1,
      pricePerUnit: 120,
      image: "/images/mq2.jpg",
      category: "Sensor"
    },
    {
      id: 3,
      name: "MQ-135 Air Quality Sensor",
      nameEn: "MQ-135 Sensor",
      quantity: 1,
      pricePerUnit: 150,
      image: "/images/mq135.jpg",
      category: "Sensor"
    },
    {
      id: 4,
      name: "LCD TFT Display 2.4 inch",
      nameEn: "LCD TFT Display",
      quantity: 1,
      pricePerUnit: 280,
      image: "/images/lcd-tft.jpg",
      category: "Display"
    },
    {
      id: 5,
      name: "Breadboard และสายจัมเปอร์",
      nameEn: "Breadboard & Jumper Wires",
      quantity: 1,
      pricePerUnit: 80,
      image: "/images/breadboard.jpg",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Resistors Set",
      nameEn: "Resistors",
      quantity: 1,
      pricePerUnit: 50,
      image: "/images/resistors.jpg",
      category: "Components"
    }
  ];

  const grandTotal = expenseItems.reduce((total, item) => total + (item.quantity * item.pricePerUnit), 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Microcontroller': 'from-green-500 to-emerald-500',
      'Sensor': 'from-orange-500 to-red-500',
      'Display': 'from-blue-500 to-indigo-500',
      'Accessories': 'from-purple-500 to-pink-500',
      'Components': 'from-yellow-500 to-orange-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .card-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Financial Report
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            รายการค่าใช้จ่าย
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              รายงานการเงินและค่าใช้จ่ายของโปรเจค Smoke Detector
            </p>

            {/* Data Notice */}
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              ข้อมูลจำลอง (Demo Data)
            </div>
          </div>
        </div>
      </section>

      {/* Financial Table */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Table */}
          <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-white">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-4">รายการ</div>
                <div className="col-span-2 text-center">หมวดหมู่</div>
                <div className="col-span-1 text-center">จำนวน</div>
                <div className="col-span-2 text-right">ราคา/หน่วย</div>
                <div className="col-span-2 text-right">รวม</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {expenseItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Row Number */}
                    <div className="col-span-1 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                        {index + 1}
                      </span>
                    </div>

                    {/* Item Name */}
                    <div className="col-span-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-lg flex items-center justify-center text-white text-lg`}>
                            {item.category === 'Microcontroller' && '🔧'}
                            {item.category === 'Sensor' && '📡'}
                            {item.category === 'Display' && '📺'}
                            {item.category === 'Accessories' && '🔌'}
                            {item.category === 'Components' && '⚡'}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {item.nameEn}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="col-span-2 text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 text-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                    </div>

                    {/* Price per Unit */}
                    <div className="col-span-2 text-right">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {formatPrice(item.pricePerUnit)}
                      </span>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 text-right">
                      <span className="text-sm font-bold text-green-600 dark:text-green-400">
                        {formatPrice(item.quantity * item.pricePerUnit)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {expenseItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Mobile Card Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                      {index + 1}
                    </span>
                    <div className={`w-8 h-8 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-lg flex items-center justify-center text-white text-sm`}>
                      {item.category === 'Microcontroller' && '🔧'}
                      {item.category === 'Sensor' && '📡'}
                      {item.category === 'Display' && '📺'}
                      {item.category === 'Accessories' && '🔌'}
                      {item.category === 'Components' && '⚡'}
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white`}>
                    {item.category}
                  </span>
                </div>

                {/* Mobile Card Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.nameEn}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">จำนวน:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{item.quantity}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">ราคา/หน่วย:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{formatPrice(item.pricePerUnit)}</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">รวม:</span>
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        {formatPrice(item.quantity * item.pricePerUnit)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Total */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-4 mt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">ยอดรวมทั้งหมด:</span>
                <span className="text-xl font-bold text-emerald-400">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Total Section */}
      <section ref={totalRef} className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Background Effects - Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-4 sm:left-1/4 w-32 h-32 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-4 sm:right-1/4 w-32 h-32 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Total Amount
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              ยอดรวมค่าใช้จ่าย
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/10 shadow-2xl">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 drop-shadow-2xl animate-glow">
              {startCountUp && (
                <CountUp
                  start={0}
                  end={grandTotal}
                  duration={2.5}
                  separator=","
                  prefix="฿"
                  preserveValue
                />
              )}
              {!startCountUp && (
                <span className="text-gray-400">฿0</span>
              )}
            </div>
            <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">
              บาท
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
