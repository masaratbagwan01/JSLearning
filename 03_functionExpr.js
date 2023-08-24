var square = function(num){
var result = num*num;
console.log(result);
}
console.log(`------------step1-------------------`);
 square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`------------step 2 ---------------------`);
var check =typeof(square);
console.log(check);

console.log(`------------step 3 ---------------------`);
var area = function(num1, num2){
    var result = num1*num2;
    console.log(result);
    }
area(499, 917);

console.log(`------------step 4 ---------------------`);

var swap1 = 55;
var swap2 = 77; 
console.log('before swap values are','swap1-', swap1,'swap2-',swap2);
var temp = swap1;
swap1= swap2;
console.log('after swap values are', 'swap1-',swap1, 'swap2-', temp);

var num1 = 'mahi';
var num2 = 'raina'; 
console.log('before swap values are','swap1-', num1,'swap2-',num2);
var temp1 = num1;
num1= num2;
console.log('after swap values are', 'swap1-',num1, 'swap2-', temp1);


console.log(`------------step 5 ---------------------`);
var oprations = "JS is most popular language in the world";
var length= oprations.length;
console.log(oprations,'Length of string is:', length);

var index = oprations.charAt(6);
console.log(oprations,'character at index 6 is-', index);

var index = oprations.charAt(11);
console.log(oprations,'character at index 11 is-', index);

var last = oprations.charAt(oprations.length-1);
console.log(`character at last index is ${last}`);

var first = oprations.charAt(0);
console.log(`char at 1st index is ${first}`);

var last3 = oprations.charAt(oprations.length-3);
console.log(`character at last index is ${last3}`);



