const formatDateTime = (dateString?: string | null) => {
  if (!dateString) return "-";

  return new Date(dateString).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatPriceBRL = (value: number | string): string => {
  const numeric = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numeric)) return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numeric);
};

function formatCountdown({
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

const formatTenantName = (tenantId: string) => {
  return tenantId.split("-")[0];
};

const formatTenantNameAllowIdUndefined = (tenantId: string | undefined) => {
  return tenantId?.split("-")[0];
};

export {
  formatDateTime,
  formatPriceBRL,
  formatCountdown,
  formatTenantName,
  formatTenantNameAllowIdUndefined,
};
