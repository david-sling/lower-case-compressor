var numbers = [];
for (var i = 48; i < 58; i++) numbers.push(String.fromCharCode(i));

var caps = [];
for (var i = 65; i < 91; i++) caps.push(String.fromCharCode(i));

var small = [];
for (var i = 97; i < 123; i++) small.push(String.fromCharCode(i));

const list62 = [...numbers, ...small, ...caps];
const list27 = ["0", ...small];

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

module.exports = { todecimal, tobase, list27, list62 };
