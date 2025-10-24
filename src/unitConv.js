let unit = 'F';

function fToC(temp) {
  let newTemp = (temp - 32) / 1.8;
  return Math.round(newTemp);
}
function setUnit(newUnit) {
  unit = newUnit;
}

export { unit, fToC, setUnit };
