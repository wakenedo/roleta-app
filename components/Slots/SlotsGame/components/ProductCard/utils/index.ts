const formatPriceBRL = (value: number | string): string => {
  const numeric = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numeric)) return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numeric);
};

export { formatPriceBRL };
