import Image from 'next/image';

export default function EquipmentPage() {
  const components = [
    {
      name: "ESP32",
      description: "ไมโครคอนโทรลเลอร์หลักที่ใช้ในการประมวลผลและควบคุมระบบ",
      features: [
        "Dual-core processor 240MHz",
        "WiFi และ Bluetooth built-in",
        "GPIO pins สำหรับเชื่อมต่อเซ็นเซอร์",
        "RAM 520KB และ Flash 4MB"
      ],
      image: "/images/esp32.jpg",
      color: "from-green-500 to-blue-500",
      delay: "0.1s"
    },
    {
      name: "MQ-2 Gas Sensor",
      description: "เซ็นเซอร์ตรวจจับก๊าซและควันบุหรี่ที่ใช้ในการตรวจสอบคุณภาพอากาศ",
      features: [
        "ตรวจจับควันบุหรี่และก๊าซไวไฟ",
        "ความไวสูงต่อ LPG, Propane, Hydrogen",
        "Operating voltage 5V",
        "Response time < 10s"
      ],
      image: "/images/mq2.jpg",
      color: "from-orange-500 to-red-500",
      delay: "0.2s"
    },
    {
      name: "MQ-135 Air Quality Sensor",
      description: "เซ็นเซอร์ตรวจสอบคุณภาพอากาศที่ตรวจจับก๊าซพิษและมลพิษ",
      features: [
        "ตรวจจับ NH3, NOx, Alcohol, Benzene",
        "ความไวสูงต่อมลพิษในอากาศ",
        "Operating voltage 5V",
        "Response time < 10s"
      ],
      image: "/images/mq135.jpg",
      color: "from-yellow-500 to-orange-500",
      delay: "0.3s"
    },
    {
      name: "LCD TFT Display",
      description: "หน้าจอแสดงผลข้อมูลแบบเรียลไทม์สำหรับการติดตามสถานะระบบ",
      features: [
        "ขนาดหน้าจอ 2.4 inch",
        "ความละเอียด 240x320 pixels",
        "สี 65K colors",
        "SPI interface"
      ],
      image: "/images/lcd-tft.jpg",
      color: "from-blue-500 to-purple-500",
      delay: "0.4s"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Project Equipment
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Detailed specifications of the hardware and technology used in our Smoke Detector
            </p>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {components.map((component, index) => (
              <div
                key={component.name}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 group hover:scale-105 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: component.delay }}
              >
                {/* Component Header - Responsive */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-600 group-hover:border-orange-500 flex-shrink-0">
                    <Image
                      src={component.image}
                      alt={component.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{component.name}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{component.description}</p>
                  </div>
                </div>

                {/* Component Features */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                    คุณสมบัติหลัก
                  </h4>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              หลักการเชื่อมต่อโดยย่อ
            </h2>
            <p className="text-xl text-gray-300">
              ดูการเชื่อมต่อและการทำงานร่วมกันของอุปกรณ์ทั้งหมดแบบเรียลไทม์
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 relative overflow-hidden">
            {/* Background Network Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Connection Lines Container */}
            <div className="relative">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Animated Connection Lines */}

                {/* Sensor to ESP32 */}
                <line
                  x1="20%" y1="30%"
                  x2="50%" y2="30%"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />

                {/* ESP32 to Display */}
                <line
                  x1="50%" y1="30%"
                  x2="80%" y2="30%"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />

                {/* ESP32 to WiFi Cloud */}
                <line
                  x1="50%" y1="30%"
                  x2="50%" y2="70%"
                  stroke="url(#gradient3)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />

                {/* Cross connections */}
                <line
                  x1="20%" y1="30%"
                  x2="80%" y2="30%"
                  stroke="url(#gradient4)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                />

                {/* Gradients for lines */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Device Grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-start" style={{ zIndex: 2 }}>

                {/* MQ Sensors */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-all duration-500"></div>
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500 group-hover:border-orange-400 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src="/images/mq2.jpg"
                        alt="MQ-2 และ MQ-135 Sensors"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                      {/* Pulse effect */}
                      <div className="absolute inset-0 border-4 border-orange-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">เซ็นเซอร์ตรวจจับ</h3>
                  <p className="text-gray-300 mb-4">MQ-2 & MQ-135</p>
                  <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/30">
                    <p className="text-sm text-orange-300 font-medium">📡 ส่งข้อมูลแบบเรียลไทม์</p>
                    <p className="text-xs text-gray-400">Analog Signal → ESP32</p>
                  </div>
                </div>

                {/* ESP32 - Central Hub */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-all duration-500"></div>
                    <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-500 group-hover:border-green-400 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src="/images/esp32.jpg"
                        alt="ESP32 Microcontroller"
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                      />
                      {/* Central hub glow */}
                      <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-pulse opacity-30"></div>
                      <div className="absolute inset-2 border-2 border-green-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">ESP32 Hub</h3>
                  <p className="text-gray-300 mb-4">ศูนย์กลางการประมวลผล</p>
                  <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                    <p className="text-sm text-green-300 font-medium">🧠 ประมวลผลและควบคุม</p>
                    <p className="text-xs text-gray-400">WiFi • Bluetooth • GPIO</p>
                  </div>
                </div>

                {/* LCD Display */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src="/images/lcd-tft.jpg"
                        alt="LCD TFT Display"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                      {/* Screen glow */}
                      <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse opacity-20"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">หน้าจอแสดงผล</h3>
                  <p className="text-gray-300 mb-4">LCD TFT Display</p>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                    <p className="text-sm text-blue-300 font-medium">📺 แสดงผลเรียลไทม์</p>
                    <p className="text-xs text-gray-400">SPI Interface</p>
                  </div>
                </div>
              </div>

              {/* IoT Cloud Connection */}
              <div className="mt-12 text-center">
                <div className="relative inline-block group">
                  <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl">☁️</span>
                    <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">IoT Cloud</h3>
                  <p className="text-gray-300 text-sm">การเชื่อมต่อระยะไกล</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
