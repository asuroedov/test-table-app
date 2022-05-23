export function formatDate(date: string | Date) {
  if (!date) return "";
  const _date = new Date(date);

  const month = (_date.getMonth() + 1).toString().padStart(2, "0");
  const day = _date.getDate().toString().padStart(2, "0");

  return `${_date.getFullYear()}-${month}-${day}`;
}
