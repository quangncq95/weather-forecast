import { Location } from '@/lib/types/location';

export function getLocationName(location: Location): string {
  const { name, country, state } = location;
  let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  if (state) {
    return `${name}, ${state}, ${regionNames.of(country)}`;
  }
  return `${name}, ${regionNames.of(country)}`;
}
