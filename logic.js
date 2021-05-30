const todecimal = (value, base) => {
  //   console.log(value);
  const basedReverseArr = value.reverse();
  const decimalArr = basedReverseArr.map(
    (char, idx) => char * Math.pow(base, idx)
  );
  const decimal = decimalArr.reduce((total, num) => total + num);
  return decimal;
};

const tobase = (decimal, base) => {
  var based = [];
  const rec = (decimal, base) => {
    const quotient = Math.floor(decimal / base);
    const remainder = decimal % base;
    based.push(remainder);
    if (!quotient) return;
    rec(quotient, base);
  };

  rec(decimal, base);
  return based.reverse();
};

module.exports = { todecimal, tobase };
