const hour = new Date().toLocaleString().slice(10, 12);
const minute = new Date().toLocaleString().slice(13,15);
const second = new Date().toLocaleString().slice(16, 18);
const ampm = new Date().toLocaleString().slice(19, 21);
const day = new Date().getDay();

export default function getStatus() {
  let status = 0;

  console.log(ampm, hour, minute, second, day);

  // -1: Weekend
  // 0: Unknown
  // 1: Sleeping
  // 2: Schools
  // 3: Free
  if (ampm === 'AM' && hour < '8' || ampm === 'AM' && hour === '12') {
    status = 1;
  } else if (day > 5) {
    status = -1;
  } else if (hour > '8' && ampm === 'AM' || hour < '8' && ampm === 'PM' || ampm === 'PM' && hour === '12') {
    status = 2;
  } else if (hour > '8' && ampm === 'PM') {
    status = 3;
  }

  return status;
}