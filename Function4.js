const ConvertCF = function(num, cf) {
  num = num.toFixed(2);
  let celsius = (num - 32) / 1.8;
  let fahrenheit = num * 1.8 + 32;
  if (cf === 'c') {
    return fahrenheit + '°F';
  } else if (cf === 'f') {
    celsius = celsius.toFixed(2);
    return celsius + '°C';
  }
};
console.log(ConvertCF(25, 'c'));
console.log(ConvertCF(92, 'f'));