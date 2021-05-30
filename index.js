const { encode, decode } = require("./lib");

const string = "bhcacsdcdsvvwevcmdvelcvr";
const encoded = encode(string);
const decoded = decode(encoded);

console.log({ string, encoded, decoded });
