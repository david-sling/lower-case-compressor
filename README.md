# lower-case-shortener

## Usage

    $ git clone https://github.com/david-sling/lower-case-shortener.git
    $ cd lowercase-shortener
    $ node index.js

## Aim:

To shorten a string that has only lowercase alphabets into an alphanumeric string.

| Decoded  | Encoded       |
| -------- | ------------- |
| a-z, " " | 0-9, a-z, A-Z |

## Facts

- We have to use 62 characters to represent 28 (a-z + "0" + " ")
- After calculation, It was found that the string can be reduced to 5/6 of its original length after encoding

## Algorithm

###### LAYER 1

The algorithm relies on 2 underlying functions.

```js
todecimal(value, base);
tobase(decimal, base);
```

As the names suggest, these functions can be used to convert a based value to a decimal and vice-versa respectively.

###### LAYER 2

The second layer has 2 functions that rely on layer 1 and 2 lists.

```js
char28tochar62(char28);
char62tochar28(char62);

list28 = ["0", ...["a" to "z"], " "]; // "0" represents null value (Cannot be used)
list63 = [...["0" to "9"], ...["a" to "z"], ...["A" to "z"]];
```

These functions follow the following example:

```js
const base62 = char62.split("").map((c) => list62.indexOf(c));
const decimal = todecimal(base62, 62);
const base28 = tobase(decimal, 28);
const char28 = base28.map((c) => list28[c]).join("");
return char28;
```

###### LAYER 3

Since bugs emerge due to decimal calculations for values greater than 11 characters, I decided to encode 6 characters at a time and decode 5 characters at a time. Since 6 to 5 characters was the calculated difference, it will also not make the system innefficient.

This layer has 2 functions that rely on Layer 2.

```js
encode(string);
decode(encoded);
```

###### APPLICATION LAYER

We can use the functions of layer 3 here like as follows:

```js
const string = "bhcacsdcdsvvwevcmdvelcvr";
const encoded = encode(string);
const decoded = decode(encoded);
console.log({ string, encoded, decoded });
```

## Test Cases

#### Test case 1

###### INPUT

```js
const string = "bhcacsdcdsvvwevcmdvelcvr";
```

###### OUTPUT

![test1](https://raw.githubusercontent.com/david-sling/lower-case-shortener/master/assets/test1.PNG "test1")

#### Test case 2

###### INPUT

```js
const string = "  sdnkceocatrtoimx";
```

###### OUTPUT

![test2](https://raw.githubusercontent.com/david-sling/lower-case-shortener/master/assets/test2.PNG "test2")

#### Test case 3

###### INPUT

```js
const string = "randomstring";
```

###### OUTPUT

![test3](https://raw.githubusercontent.com/david-sling/lower-case-shortener/master/assets/test3.PNG "test3")

## Reference

- Base conversion: <https://www.tutorialspoint.com/computer_logical_organization/number_system_conversion.htm>
