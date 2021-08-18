export function validationType(dataValue, value) {
  return value.type === typeof dataValue;
}

export function validationRequired(dataValue, value) {
  if (dataValue === undefined && value.required === true) {
    return false;
  }
  return true;
}
