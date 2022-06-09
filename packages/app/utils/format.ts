export function formatNumber(num): string {
  const numberFormatter = Intl.NumberFormat("en-US");
  return numberFormatter.format(num);
}
