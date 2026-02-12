function getTimeUntil(dateString: string) {
  const target = new Date(dateString).getTime();
  const now = Date.now();

  const diff = Math.max(target - now, 0);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { hours, minutes, seconds, isExpired: diff <= 0 };
}

export function formatCountdown({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export { getTimeUntil };
