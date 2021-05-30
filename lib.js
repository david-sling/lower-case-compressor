var numbers = [];
for (var i = 48; i < 58; i++) numbers.push(String.fromCharCode(i));

var caps = [];
for (var i = 65; i < 91; i++) caps.push(String.fromCharCode(i));

var small = [];
for (var i = 97; i < 123; i++) small.push(String.fromCharCode(i));

const list62 = [...numbers, ...small, ...caps];
const list27 = [" ", ...small];

const { tobase, todecimal } = require("./logic");

const char27tochar62 = (char27) => {
  const base27 = char27.split("").map((c) => list27.indexOf(c));

  const decimal = todecimal(base27, 27);

  const base62 = tobase(decimal, 62);
  const char62 = base62.map((c) => list62[c]).join("");

  // console.log({ char27, decimal, char62 });

  return char62;
};

const char62tochar27 = (char62) => {
  const base62 = char62.split("").map((c) => list62.indexOf(c));

  const decimal = todecimal(base62, 62);

  const base27 = tobase(decimal, 27);
  const char27 = base27.map((c) => list27[c]).join("");

  // console.log({ char62, decimal, char27 });

  return char27;
};

const encode = (string) => {
  const string6 = string.trim().match(/.{1,6}/g);
  const encoded = string6.map((s) => char27tochar62(s)).join("");
  return encoded;
};

const decode = (encoded) => {
  const encoded5 = encoded.match(/.{1,5}/g);
  const decoded = encoded5.map((s) => char62tochar27(s)).join("");
  return decoded;
};

module.exports = { encode, decode };
