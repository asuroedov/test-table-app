export function prepareWhere(tableField: string, operation: string, userValue: string) {
  let _userValue = operation === "LIKE" ? `%${userValue}%` : userValue;
  _userValue = ["date", "title"].includes(tableField) ? `'${_userValue}'` : _userValue;
  return `${tableField.toLowerCase()} ${operation} ${_userValue.toLowerCase()}`;
}
