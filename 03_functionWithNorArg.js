// Function with no argument and no return value

function show(){

    console.log('My name is Gajanan');

    console.log('I am Technical lead');

    console.log('My tech skill is - Java + Angular + React + DevOps + ');

}

show(); // Function Invocation

 

// Function with argument and no return value 

function checkType(value){ // var value;

    console.log('Value is', value);

    console.log('Type is: ', typeof value);
// function with argument and  return values
    console.log('-------------------------');

}

checkType(100);

checkType("GK");

checkType(true);

checkType(undefined);

checkType(null);

checkType();

 

// Function with argument and return value

function addition(arg1, arg2, arg3){

    console.log('Values are: ', arg1, arg2, arg3);

    var result = arg1 + arg2 + arg3;

    return result;

}

var res = addition(10, 23, 456);
console.log('result is :', res);
var ress= addition(-56, 239, 677);
console.log('result is:', ress);
var resultvalue = addition('GK', 55 ,'honey');
console.log('result is :',resultvalue);

