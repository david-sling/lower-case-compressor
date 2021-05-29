const { tobase, todecimal, list27, list62 } = require("./logic");

const char27tochar62 = (char27) => {
  const base27 = char27.split("").map((c) => list27.indexOf(c));

  const decimal = todecimal(base27, 27);

  const base62 = tobase(decimal, 62);
  const char62 = base62.map((c) => list62[c]).join("");

  return char62;
};

const char62tochar27 = (char62) => {
  const base62 = char62.split("").map((c) => list62.indexOf(c));

  const decimal = todecimal(base62, 62);

  const base27 = tobase(decimal, 27);
  const char27 = base27.map((c) => list27[c]).join("");

  return char27;
};

module.exports = { encode: char27tochar62, decode: char62tochar27 };
