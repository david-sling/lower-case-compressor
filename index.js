const { encode, decode } = require("./lib");

const string = "bhcadscdrthy";
const encoded = encode(string);
const decoded = decode(encoded);

console.log({ string, encoded, decoded });
