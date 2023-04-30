var regex = /hello/;
const str = "GOOD EVENING";

console.log("/hello/ : ", regex.test("hello world"));

//Flags /g

var regexReplace = /abc/;

var testStr = "one abc two abc";

console.log("/abc/ : ", testStr.replace(regexReplace, "replaced"));

var regexGlobalReplace = /abc/g;

console.log("/abc/g : ", testStr.replace(regexGlobalReplace, "replaced"));

//Flags /i

var regexCaseInsensitive = /good/i;
console.log("/good/i GOOD MORNING: ", regexCaseInsensitive.test(str));

//Character Set [xyz]

var characterSet = /[bt]ear/;

console.log("/[bt]ear/ tear : ", characterSet.test("tear"));

console.log("/[bt]ear/ fear : ", characterSet.test("fear"));

console.log("/[bt]ear/ bear :", characterSet.test("bear"));

// Negated Character Set [^xyz]

var negatedCharacterSet = /[^bt]ear/;

console.log("/[^bt]ear/ tear : ", negatedCharacterSet.test("tear"));

console.log("/[^bt]ear/ fear : ", negatedCharacterSet.test("fear"));

console.log("/[^bt]ear/ bear :", negatedCharacterSet.test("bear"));

//Quantifiers
