var hello = "My Name is Khan";
var lengthhello= hello.length;
console.log(hello,'Length of string is:', lengthhello);
console.log(`--------------------------------------------------`);

var charAt3 = hello.charAt(3);
console.log(`${hello}- char at 3rd index is ${charAt3}`);
console.log(`--------------------------------------------------`);

var charAtLastIndex = hello.charAt(lengthhello-1);
console.log(`Last charater is ${charAtLastIndex} of index is ${lengthhello}`);
console.log(`--------------------------------------------------`);

var FirstName = "Masarat";
var LastName = " Bagwan";
var Result = FirstName+LastName;
console.log(`concated value is : ${Result}`);
console.log(`--------------------------------------------------`);

var anotherMethod = FirstName.concat(LastName);
console.log(`My Full Name is ${anotherMethod}`);
console.log(`--------------------------------------------------`);

var index = hello.indexOf('K');
console.log(`Index of character 'K' is : ${index}`);
console.log(`--------------------------------------------------`);

var word = hello.indexOf('han');
console.log(`Index of han is: ${word}`);
console.log(`---------------------------------------------------`);

var push = hello.includes('Masarat');
console.log(`${push}`);
console.log(`---------------------------------------------------`);

var right = hello.includes('Khan');
console.log(`${right}`);
console.log(`---------------------------------------------------`);

var split = hello.split(' ');
console.log(split);
var result = split.length;
console.log(`total no. of words are: ${result}`);
console.log(`---------------------------------------------------`);

var clean = '     Good Morning     ';
console.log(clean.length);
var result = clean.trim();
console.log(result.length);
console.log(`before string trim= ${clean.length} after string trim ${result.length}`);

console.log(`------------------------------------`);

var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(` End Spaces is : ${endSpaces} `);
console.log(`---------------------------------------------------`);

var result = hello.replace( ' ', '-');
console.log(`after replacing ' ' with '-' result is : ${result}`);
console.log(`---------------------------------------------------`);

var girl = hello.slice( 1, 6 );
console.log(girl);

