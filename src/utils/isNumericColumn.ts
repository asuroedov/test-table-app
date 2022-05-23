export function isNumericColumn(columnName: string) {
  return ["count", "distance"].includes(columnName);
}
