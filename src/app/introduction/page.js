import Image from 'next/image';

export default function IntroductionPage() {

    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" style={{ zIndex: -1 }}></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Header Section */}
            <section className="relative py-20 text-center" style={{ zIndex: 10 }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-none animate-fade-in-up">
                        <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse-glow">
                            เกี่ยวกับโปรเจค
                        </span>
                    </h1>

                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                            ระบบตรวจจับควันบุหรี่อัจฉริยะที่พัฒนาด้วย ESP32 และเซ็นเซอร์คุณภาพสูง
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="relative py-16 lg:py-24" style={{ zIndex: 10 }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="animate-slide-in-left">
                            <div className="bg-gradient-to-r from-gray-800/60 via-gray-700/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-3xl hover:border-gray-500/50 transition-all duration-500 group">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                                    <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-red-400 transition-all duration-300">
                                        รายละเอียดโปรเจค
                                    </span>
                                </h2>

                                <div className="space-y-6 text-gray-300">
                                    <div className="p-5 bg-gray-800/40 rounded-xl border border-orange-500/20 hover:border-orange-500/40 hover:bg-gray-800/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10">
                                        <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                                            <span className="text-2xl mr-3">🎯</span>
                                            วัตถุประสงค์
                                        </h3>
                                        <p className="leading-relaxed">
                                            ระบบนี้ออกแบบมาเพื่อ <span className="font-bold text-orange-400">ตรวจจับควันบุหรี่</span> โดยเฉพาะ
                                            ใช้ <span className="font-bold text-green-400">ESP32</span> ร่วมกับเซ็นเซอร์
                                            <span className="font-bold text-orange-400"> MQ-2</span> และ
                                            <span className="font-bold text-yellow-400"> MQ-135</span>
                                            เพื่อให้สามารถตรวจจับควันบุหรี่และก๊าซที่เกี่ยวข้องได้อย่างแม่นยำ
                                        </p>
                                    </div>

                                    <div className="p-5 bg-gray-800/40 rounded-xl border border-blue-500/20 hover:border-blue-500/40 hover:bg-gray-800/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                                        <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                                            <span className="text-2xl mr-3">📱</span>
                                            ฟีเจอร์หลัก
                                        </h3>
                                        <p className="leading-relaxed">
                                            ข้อมูลการตรวจจับจะแสดงผลแบบเรียลไทม์ผ่านหน้าจอ
                                            <span className="font-bold text-blue-400"> LCD TFT</span>
                                            และสามารถเชื่อมต่อ WiFi เพื่อแจ้งเตือนเมื่อมีควันบุหรี่ในพื้นที่
                                        </p>
                                    </div>

                                    <div className="p-5 bg-gray-800/40 rounded-xl border border-green-500/20 hover:border-green-500/40 hover:bg-gray-800/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                                        <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                                            <span className="text-2xl mr-3">🔧</span>
                                            เทคโนโลยี
                                        </h3>
                                        <p className="leading-relaxed">
                                            ใช้เทคโนโลยี <span className="font-bold text-purple-400">IoT (Internet of Things)</span>
                                            ที่ทันสมัยและมีประสิทธิภาพสูง เหมาะสำหรับการใช้งานในสถานที่ต่างๆ
                                            ที่ต้องการความปลอดภัยจากควันบุหรี่
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="animate-slide-in-right">
                            <div className="bg-gradient-to-br from-gray-800/60 via-gray-700/60 to-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/40 shadow-2xl hover:shadow-3xl hover:border-gray-500/50 transition-all duration-500 group">
                                <h2 className="text-3xl font-bold text-white mb-10 text-center">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                                        อุปกรณ์หลัก
                                    </span>
                                </h2>

                                <div className="space-y-10">
                                    {/* แถวบน - ESP32 และ เซ็นเซอร์ */}
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="text-center group/item">
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-green-500 shadow-lg shadow-green-500/30 group-hover/item:shadow-green-500/60 group-hover/item:border-green-400 transition-all duration-300 transform group-hover/item:-translate-y-2">
                                                    <Image
                                                        src="/images/esp32.jpg"
                                                        alt="ESP32"
                                                        width={96}
                                                        height={96}
                                                        className="object-cover w-full h-full group-hover/item:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover/item:text-green-400 transition-colors duration-300">ESP32</h3>
                                            <p className="text-sm text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">ไมโครคอนโทรลเลอร์หลัก<br />ควบคุมระบบทั้งหมด</p>
                                        </div>

                                        <div className="text-center group/item">
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-orange-500 shadow-lg shadow-orange-500/30 group-hover/item:shadow-orange-500/60 group-hover/item:border-orange-400 transition-all duration-300 transform group-hover/item:-translate-y-2">
                                                    <Image
                                                        src="/images/mq2.jpg"
                                                        alt="MQ-2 และ MQ-135 Sensors"
                                                        width={96}
                                                        height={96}
                                                        className="object-cover w-full h-full group-hover/item:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover/item:text-orange-400 transition-colors duration-300">เซ็นเซอร์</h3>
                                            <p className="text-sm text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">MQ-2 และ MQ-135<br />ตรวจจับควันและก๊าซ</p>
                                        </div>
                                    </div>

                                    {/* แถวล่าง - LCD TFT ตรงกลาง */}
                                    <div className="flex justify-center">
                                        <div className="text-center group/item">
                                            <div className="relative">
                                                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-blue-500 shadow-lg shadow-blue-500/30 group-hover/item:shadow-blue-500/60 group-hover/item:border-blue-400 transition-all duration-300 transform group-hover/item:-translate-y-2">
                                                    <Image
                                                        src="/images/lcd-tft.jpg"
                                                        alt="LCD TFT Display"
                                                        width={96}
                                                        height={96}
                                                        className="object-cover w-full h-full group-hover/item:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover/item:text-blue-400 transition-colors duration-300">LCD TFT</h3>
                                            <p className="text-sm text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">หน้าจอแสดงผล<br />ข้อมูลเรียลไทม์</p>
                                        </div>
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
