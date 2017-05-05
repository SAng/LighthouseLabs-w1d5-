function isLuhn(n) {
  if (isNaN(n)) {
    return false
  }
  result = 0
  var digit = n.toString()
  for (var i = (digit.length - 2); i >=0; i -= 1) {
    var digiti = Number(digit[i]);
    var doubledigit = (2 * digiti);
    var evendigit = (0 === ((digit.length - i) % 2));
    var transformeddigits = (evendigit ? ((doubledigit > 9) ? (doubledigit - 9) : doubledigit) : digiti);
    result += transformeddigits
  }
  return (((result * 9) % 10) == digit[digit.length - 1])
}


module.exports = isLuhn;