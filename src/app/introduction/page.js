import Image from 'next/image';

export default function IntroductionPage() {
    // ข้อมูลประโยชน์ของระบบ
    const benefits = [
        {
            title: "ความปลอดภัยสูง",
            description: "ตรวจจับควันบุหรี่และก๊าซพิษได้อย่างแม่นยำและรวดเร็ว ช่วยป้องกันการสูบบุหรี่ในพื้นที่ห้ามสูบ",
            icon: "🛡️",
            color: "from-green-500 to-blue-500"
        },
        {
            title: "การตรวจสอบแบบเรียลไทม์",
            description: "แสดงผลข้อมูลการตรวจจับแบบเรียลไทม์ผ่านหน้าจอ LCD TFT พร้อมการแจ้งเตือนทันที",
            icon: "📊",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "เชื่อมต่อ IoT",
            description: "รองรับการเชื่อมต่อ WiFi และ Bluetooth สำหรับการควบคุมและติดตามระยะไกล",
            icon: "📡",
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "ต้นทุนต่ำ",
            description: "ใช้เทคโนโลยีที่หาได้ง่ายและมีราคาไม่แพง เหมาะสำหรับการใช้งานทั่วไป",
            icon: "💰",
            color: "from-yellow-500 to-green-500"
        }
    ];

    // ข้อมูลทางเทคนิคของอุปกรณ์
    const technicalSpecs = [
        {
            category: "ESP32 Microcontroller",
            specs: [
                "Dual-core processor 240MHz",
                "WiFi 802.11 b/g/n และ Bluetooth 4.2",
                "RAM 520KB และ Flash 4MB",
                "GPIO pins 34 ตัว",
                "Operating voltage 3.3V"
            ],
            color: "from-green-500 to-blue-500"
        },
        {
            category: "MQ-2 Gas Sensor",
            specs: [
                "ตรวจจับควันบุหรี่และก๊าซไวไฟ",
                "ความไวสูงต่อ LPG, Propane, Hydrogen",
                "Operating voltage 5V",
                "Response time < 10s",
                "Detection range 300-10000ppm"
            ],
            color: "from-orange-500 to-red-500"
        },
        {
            category: "MQ-135 Air Quality Sensor",
            specs: [
                "ตรวจจับ NH3, NOx, Alcohol, Benzene",
                "ความไวสูงต่อมลพิษในอากาศ",
                "Operating voltage 5V",
                "Response time < 10s",
                "Detection range 10-1000ppm"
            ],
            color: "from-yellow-500 to-orange-500"
        },
        {
            category: "LCD TFT Display",
            specs: [
                "ขนาดหน้าจอ 2.4 inch",
                "ความละเอียด 240x320 pixels",
                "สี 65K colors",
                "SPI interface",
                "Backlight LED"
            ],
            color: "from-blue-500 to-purple-500"
        }
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Header Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Project Introduction
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Learn about our intelligent Smoke Detector built with ESP32 and high-quality sensors
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                                เกี่ยวกับโปรเจค
                            </h2>
                            <div className="space-y-4 sm:space-y-6 text-gray-300">
                                <p className="text-base sm:text-lg leading-relaxed">
                                    ระบบนี้ออกแบบมาเพื่อ <span className="font-bold text-orange-400">ตรวจจับควันบุหรี่</span> โดยเฉพาะ
                                    ใช้ <span className="font-bold text-green-400">ESP32</span> ร่วมกับเซ็นเซอร์
                                    <span className="font-bold text-orange-400"> MQ-2</span> และ
                                    <span className="font-bold text-yellow-400"> MQ-135</span>
                                    เพื่อให้สามารถตรวจจับควันบุหรี่และก๊าซที่เกี่ยวข้องได้อย่างแม่นยำ
                                </p>
                                <p className="text-lg leading-relaxed">
                                    ข้อมูลการตรวจจับจะแสดงผลแบบเรียลไทม์ผ่านหน้าจอ
                                    <span className="font-bold text-blue-400"> LCD TFT</span>
                                    และสามารถเชื่อมต่อ WiFi เพื่อแจ้งเตือนเมื่อมีควันบุหรี่ในพื้นที่
                                </p>
                            </div>
                        </div>

                        <div className="animate-slide-in-right">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50">
                                <div className="space-y-4 sm:space-y-6">
                                    {/* แถวบน - ESP32 และ เซ็นเซอร์ */}
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                        <div className="text-center">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto mb-4 border-2 border-green-500">
                                                <Image
                                                    src="/images/esp32.jpg"
                                                    alt="ESP32"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">ESP32</h3>
                                            <p className="text-sm text-gray-300">ไมโครคอนโทรลเลอร์หลัก</p>
                                        </div>

                                        <div className="text-center">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto mb-4 border-2 border-orange-500">
                                                <Image
                                                    src="/images/mq2.jpg"
                                                    alt="MQ-2 และ MQ-135 Sensors"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">เซ็นเซอร์</h3>
                                            <p className="text-sm text-gray-300">MQ-2 และ MQ-135</p>
                                        </div>
                                    </div>

                                    {/* แถวล่าง - LCD TFT ตรงกลาง */}
                                    <div className="flex justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden mx-auto mb-4 border-2 border-blue-500">
                                                <Image
                                                    src="/images/lcd-tft.jpg"
                                                    alt="LCD TFT Display"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">LCD TFT</h3>
                                            <p className="text-sm text-gray-300">หน้าจอแสดงผล</p>
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
