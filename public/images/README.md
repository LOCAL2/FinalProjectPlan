# วิธีการใส่รูปพื้นหลังหน้าแรก

## 📁 วางรูปในโฟลเดอร์นี้

1. **วางไฟล์รูปในโฟลเดอร์ `public/images/`**
   - ชื่อไฟล์แนะนำ: `background.jpg` หรือ `background.png`
   - ขนาดแนะนำ: 1920x1080 หรือสูงกว่า
   - รูปแบบไฟล์: JPG, PNG, WebP

## 🔧 แก้ไขโค้ดในไฟล์ `src/app/page.js`

หาบรรทัดที่มี comment นี้:
```javascript
{/* ใส่รูปพื้นหลังตรงนี้ */}
{/* <Image 
  src="/images/background.jpg" 
  alt="Background" 
  fill
  className="object-cover"
  priority
/> */}
```

**ลบ comment ออก** และแก้ไขเป็น:
```javascript
{/* ใส่รูปพื้นหลังตรงนี้ */}
<Image 
  src="/images/background.jpg" 
  alt="Background" 
  fill
  className="object-cover"
  priority
/>
```

## 🎨 ปรับแต่งเพิ่มเติม

### เปลี่ยนความโปร่งใสของ overlay:
หาบรรทัด:
```javascript
<div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]"></div>
```

เปลี่ยน `bg-black/40` เป็น:
- `bg-black/20` = โปร่งใสมาก
- `bg-black/60` = เข้มมาก
- `bg-black/80` = เข้มมากๆ

### เปลี่ยนการแสดงผลรูป:
เปลี่ยน `className="object-cover"` เป็น:
- `object-cover` = ครอบคลุมเต็มพื้นที่
- `object-contain` = แสดงรูปเต็ม
- `object-fill` = ยืดรูปให้เต็มพื้นที่

## 📝 ตัวอย่างชื่อไฟล์ที่แนะนำ:
- `background.jpg`
- `hero-bg.jpg`
- `smoke-detector-bg.jpg`
- `circuit-bg.jpg`
