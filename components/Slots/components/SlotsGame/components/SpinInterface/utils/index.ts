function getTimeUntil(dateString: string) {
  const target = new Date(dateString).getTime();
  const now = Date.now();

  const diff = Math.max(target - now, 0);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { hours, minutes, seconds, isExpired: diff <= 0 };
}

function getTextColorFromBgClass(bgClass?: string) {
  if (!bgClass) return "text-amber-900";

  const match = bgClass.match(/#([0-9A-Fa-f]{6})/);

  if (!match) return "text-amber-900";

  const hex = match[1];

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness < 140 ? "text-white" : "text-amber-900";
}

export { getTimeUntil, getTextColorFromBgClass };
