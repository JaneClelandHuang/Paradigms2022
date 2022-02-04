let convert = {};

// Converts Celsius to  fahrenheit
convert.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

// Converts fahrenheit to celsius
convert.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

module.exports = convert;