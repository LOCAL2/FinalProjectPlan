'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

// Translation data
const translations = {
  th: {
    // Navigation
    home: 'หน้าแรก',
    equipment: 'อุปกรณ์',
    timeline: 'ไทม์ไลน์',
    introduction: 'แนะนำ',
    members: 'สมาชิก',
    expenses: 'ค่าใช้จ่าย',
    
    // Common
    learnMore: 'เรียนรู้เพิ่มเติม',
    viewEquipment: 'ดูอุปกรณ์',
    projectTeam: 'ทีมงาน',
    projectBudget: 'งบประมาณโครงการ',
    
    // Home page
    smokeDetector: 'SMOKE DETECTOR',
    intelligentSystem: 'ระบบตรวจจับควันบุหรี่อัจฉริยะ',
    realTimeMonitoring: 'การตรวจสอบแบบเรียลไทม์',
    realTimeDesc: 'แสดงผลข้อมูลการตรวจจับควันบุหรี่แบบเรียลไทม์ผ่านหน้าจอ LCD TFT',
    highAccuracy: 'ความแม่นยำสูง',
    highAccuracyDesc: 'ใช้เซ็นเซอร์ MQ-2 และ MQ-135 ที่มีความแม่นยำในการตรวจจับควันบุหรี่สูง',
    
    // Equipment page
    projectEquipment: 'อุปกรณ์โปรเจค',
    equipmentDesc: 'รายละเอียดอุปกรณ์และเทคโนโลยีที่ใช้ในการพัฒนาระบบตรวจจับควันบุหรี่',
    mainFeatures: 'คุณสมบัติหลัก',
    
    // Timeline page
    projectTimeline: 'ไทม์ไลน์โปรเจค',
    timelineDesc: 'ติดตามขั้นตอนการพัฒนาโปรเจค Smoke Detector ตั้งแต่เริ่มต้นจนเสร็จสิ้น',
    developmentJourney: 'จากแนวคิดสู่การนำไปใช้งานจริง',
    
    // Members page
    teamMembers: 'ทีมงาน',
    membersDesc: 'พบกับทีมนักพัฒนาที่อยู่เบื้องหลังโปรเจค Smoke Detector',
    teamCollaboration: 'ความร่วมมือที่สร้างสรรค์นวัตกรรม',
    projectLeader: 'Project Leader',
    leftHand: 'มือซ้าย',
    rightHand: 'มือขวา',
    mainSkills: 'ทักษะหลัก',
    
    // Expenses page
    expensesList: 'รายการค่าใช้จ่าย',
    expensesDesc: 'รายงานการเงินและค่าใช้จ่ายของโปรเจค Smoke Detector',
    demoData: 'ข้อมูลจำลอง (Demo Data)',
    totalExpenses: 'ยอดรวมค่าใช้จ่าย',
    itemList: 'รายการ',
    category: 'หมวดหมู่',
    quantity: 'จำนวน',
    pricePerUnit: 'ราคา/หน่วย',
    total: 'รวม',
    grandTotal: 'ยอดรวมทั้งหมด',
    
    // Introduction page
    projectIntroduction: 'แนะนำโปรเจค',
    introDesc: 'เรียนรู้เกี่ยวกับระบบตรวจจับควันบุหรี่อัจฉริยะที่พัฒนาด้วย ESP32 และเซ็นเซอร์คุณภาพสูง',
    aboutProject: 'เกี่ยวกับโปรเจค',
    
    // Theme
    lightMode: 'โหมดสว่าง',
    darkMode: 'โหมดมืด',
    systemMode: 'ตามระบบ',
    
    // Language
    thai: 'ไทย',
    english: 'English'
  },
  
  en: {
    // Navigation
    home: 'Home',
    equipment: 'Equipment',
    timeline: 'Timeline',
    introduction: 'Introduction',
    members: 'Members',
    expenses: 'Expenses',
    
    // Common
    learnMore: 'Learn More',
    viewEquipment: 'View Equipment',
    projectTeam: 'Project Team',
    projectBudget: 'Project Budget',
    
    // Home page
    smokeDetector: 'SMOKE DETECTOR',
    intelligentSystem: 'Intelligent Cigarette Smoke Detection System',
    realTimeMonitoring: 'Real-time Monitoring',
    realTimeDesc: 'Display real-time cigarette smoke detection data through LCD TFT screen',
    highAccuracy: 'High Accuracy',
    highAccuracyDesc: 'Uses MQ-2 and MQ-135 sensors with high accuracy in cigarette smoke detection',
    
    // Equipment page
    projectEquipment: 'Project Equipment',
    equipmentDesc: 'Detailed specifications of hardware and technology used in our Smoke Detector',
    mainFeatures: 'Main Features',
    
    // Timeline page
    projectTimeline: 'Project Timeline',
    timelineDesc: 'Follow the development journey of our Smoke Detector from concept to completion',
    developmentJourney: 'From concept to implementation',
    
    // Members page
    teamMembers: 'Team Members',
    membersDesc: 'Meet the talented individuals behind the Smoke Detector project',
    teamCollaboration: 'Collaboration that creates innovation',
    projectLeader: 'Project Leader',
    leftHand: 'Left Hand',
    rightHand: 'Right Hand',
    mainSkills: 'Main Skills',
    
    // Expenses page
    expensesList: 'Expense List',
    expensesDesc: 'Financial report and expenses of the Smoke Detector project',
    demoData: 'Demo Data',
    totalExpenses: 'Total Expenses',
    itemList: 'Items',
    category: 'Category',
    quantity: 'Quantity',
    pricePerUnit: 'Price/Unit',
    total: 'Total',
    grandTotal: 'Grand Total',
    
    // Introduction page
    projectIntroduction: 'Project Introduction',
    introDesc: 'Learn about our intelligent Smoke Detector built with ESP32 and high-quality sensors',
    aboutProject: 'About Project',
    
    // Theme
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    systemMode: 'System Mode',
    
    // Language
    thai: 'ไทย',
    english: 'English'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('th');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'th' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'th' ? 'en' : 'th';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const setSpecificLanguage = (newLanguage) => {
    if (newLanguage === 'th' || newLanguage === 'en') {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage,
      setLanguage: setSpecificLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
