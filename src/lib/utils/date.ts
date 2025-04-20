import dayjs, { type Dayjs } from 'dayjs';

export function formatddmmyyyy(date: Date | string): string {
  return dayjs(date).format('DD/MM/YYYY');
}

export function formatyyyymm(date: Date | string): string {
  return dayjs(date).format('YYYY-MM');
}

export function format_hhmmddmmyyyy(date: Date | string): string {
  return dayjs(date).format('HH:mm | DD/MM/YYYY');
}

export function getDayOfWeek(date: Date | string | number): string {
  let tempDate;
  if (typeof date === 'number') {
    tempDate = dayjs(date * 1000);
  } else {
    tempDate = dayjs(date);
  }
  const dayOfWeek = tempDate.day();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayOfWeek];
}

export function format_ddmmmyyyy(date: Date | string | number): string {
  let tempDate;
  if (typeof date === 'number') {
    tempDate = dayjs(date * 1000);
  } else {
    tempDate = dayjs(date);
  }
  return tempDate.format('DD MMM,YYYY');
}

export function format_hmmA(date: Date | string | number): string {
  let tempDate;
  if (typeof date === 'number') {
    tempDate = dayjs(date * 1000);
  } else {
    tempDate = dayjs(date);
  }
  return tempDate.format('h:mm A');
}

export function getHelloString(): string {
  const hour = dayjs().hour();
  if (hour < 12) {
    return 'Good Morning';
  } else if (hour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
