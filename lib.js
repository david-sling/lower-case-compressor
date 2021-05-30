var numbers = [];
for (var i = 48; i < 58; i++) numbers.push(String.fromCharCode(i));

var caps = [];
for (var i = 65; i < 91; i++) caps.push(String.fromCharCode(i));

var small = [];
for (var i = 97; i < 123; i++) small.push(String.fromCharCode(i));

const list62 = [...numbers, ...small, ...caps];
const list28 = ["0", ...small, " "];

const { tobase, todecimal } = require("./logic");

const char28tochar62 = (char28) => {
  const base28 = char28.split("").map((c) => list28.indexOf(c));

  const decimal = todecimal(base28, 28);

  const base62 = tobase(decimal, 62);
  const char62 = base62.map((c) => list62[c]).join("");

  // console.log({ char28, decimal, char62 });

  return char62;
};

const char62tochar28 = (char62) => {
  const base62 = char62.split("").map((c) => list62.indexOf(c));

  const decimal = todecimal(base62, 62);

  const base28 = tobase(decimal, 28);
  const char28 = base28.map((c) => list28[c]).join("");

  // console.log({ char62, decimal, char28 });

  return char28;
};

const encode = (string) => {
  const string6 = string.match(/.{1,6}/g);
  const encoded = string6.map((s) => char28tochar62(s)).join("");
  return encoded;
};

const decode = (encoded) => {
  const encoded5 = encoded.match(/.{1,5}/g);
  const decoded = encoded5.map((s) => char62tochar28(s)).join("");
  return decoded;
};

module.exports = { encode, decode };
