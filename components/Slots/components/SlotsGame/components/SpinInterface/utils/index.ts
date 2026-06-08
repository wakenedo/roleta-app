function getTimeUntil(dateString: string) {
  const target = new Date(dateString).getTime();
  const now = Date.now();

  const diff = Math.max(target - now, 0);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { hours, minutes, seconds, isExpired: diff <= 0 };
}

export { getTimeUntil };
