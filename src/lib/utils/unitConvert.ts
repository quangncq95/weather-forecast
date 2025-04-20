export function convertMsToKmh(ms: number): string {
  return Number(ms * 3.6).toFixed(2);
}

export function convertMeterToKm(m: number): string {
  return Number(m / 1000).toFixed(2);
}
