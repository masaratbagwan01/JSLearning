console.log('----------------- step 1 ------------------------------');
console.log('My Dream Company is TCS.');

var hobby1 = "Hobby 1= writing     ";
var hobby2 = " Hobby 2= reading     ";
var hobby3 = " Hobby 3= sleeping";

var add = hobby1.concat(hobby2).concat(hobby3);
console.log(add);


var count = add.length ;
console.log(`length of total string is : ${add.length}`);

console.log('-----------------------------------');

console.log('---------------------step 2 ------------------------------------');


    var str = "     Hey You are doing good,  keep dude it up     ";
    console.log(`Given String is; ${str}`);
    var len = str.length;
    console.log(`Length of string is; ${len}`);
    console.log('-----------------------------------');

    console.log('----------------- step 3 ------------------------------');

    var before = str.trim();
    console.log(before);
    console.log(`before trim string length ${len}   after trim string lngth is : ${before} and its length is ${before.length}`);
    console.log('-----------------------------------');

    var char = str.length - before.length;
    console.log(`total no. of words : ${char}`);
 
    console.log('----------------- step 4 ------------------------------');
     var tr = str.trim();
     var char = tr.charAt(0);
console.log(`char at 1st index is ${char}`);
     var last = tr.charAt(tr.length-1);
     console.log(`char at last index is ${last}`);

     console.log('----------------- step 5 ------------------------------');
     var after = tr.split(' ');
     console.log(after);

     console.log('----------------- step 6 ------------------------------');
     var index = tr.indexOf('good');
console.log(`Index of word 'good' is : ${index}`);

console.log('----------------- step 7 ------------------------------');
var girl = tr.slice( 22);
console.log(girl);

console.log('----------------- step 8 ------------------------------');
var push = tr.endsWith('up');
console.log(`${push}`);
console.log('----------------- step 8 ------------------------------');
var pus = tr.startsWith('Hey');
console.log(`${pus}`);








