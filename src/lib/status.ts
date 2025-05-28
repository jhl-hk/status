const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const day = now.getDay();

export default function getStatus() {
  let status = 0;

  // -1: Weekend
  // 0: Unknown
  // 1: Sleeping
  // 2: Schools
  // 3: Free

  // Weekend check
  if (day === 0 || day === 6) {
    status = -1;
  }
  // Sleeping hours (12 AM - 8 AM)
  else if (hour < 8) {
    status = 1;
  }
  // School hours (8 AM - 8 PM on weekdays)
  else if (hour >= 8 && hour < 20) {
    status = 2;
  }
  // Free time (8 PM - 12 AM)
  else {
    status = 3;
  }

  return status;
}