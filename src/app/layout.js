import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smoke Detector Project - ESP32 IoT System",
  description: "ระบบตรวจจับควันบุหรี่ด้วย ESP32 และเซ็นเซอร์คุณภาพสูง MQ-2, MQ-135 พร้อมหน้าจอ LCD TFT แสดงผลเรียลไทม์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
