export function formatDate(date: string | Date) {
  const _date = new Date(date);

  const month = (_date.getMonth() + 1).toString().padStart(2, "0");
  const day = _date.getDate().toString().padStart(2, "0");

  return `${_date.getFullYear()}-${month}-${day}`;
}

export function formatTime(date: string | Date) {
  const _date = new Date(date);
  const hours = _date.getHours().toString().padStart(2, "0");
  const minutes = _date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
