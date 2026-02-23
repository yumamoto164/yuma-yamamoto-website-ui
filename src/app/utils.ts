export function getYearsOfExperience(startDate: Date): string {
  const now = new Date();
  const years = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return `${Math.floor(years)}+`;
}
