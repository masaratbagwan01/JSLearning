function show(){
    console.log('Chain initiation Process.');
    console.log('chain prapogation process.');

}
show();
console.log('--------------------------------------------------');

function personalDetails(firstName, lastName, collegeName){
    console.log('value are:', firstName, lastName, collegeName);
}

var res = personalDetails('khushi', 'shaikh' , 'sangmeshwar college');
console.log('------------------------------------------------------------');

var num1="virat";
var num2="anushka";
console.log('before swaping :- ', 'argument 1=' , num1 ,'argument 2=' , num2);
var temp=num1
num1=num2
console.log('after swaping :-' ,'argument 1=' , num1, 'argument 2=' , temp,);

var num1="1000";
var num2="2000";
console.log('before swaping :-', 'argument 1=', num1, 'argument 2=', num2);
var temp=num1
num1=num2
console.log('after swaping:-', 'argument 1=', num1, 'argument 2=', temp);

console.log('--------------------------------------------------------------');

function addition(arg1, arg2, arg3) {
    var result= arg1+arg2+arg3;
    return result;    
}
var number=addition(10.23,600,40);
console.log('addition is:-', number);


function addition(arg1, arg2, arg3) {
    var result= arg1+arg2+arg3;
    return result;
    
}
var words=addition('Hello', 'Good', 'Morning')
console.log('addition is:-', words);
console.log('-----------------------------------------------');

function show(){
    console.log('Bank Name:- CITI Bank Account Number:3456782345 Location : pune pin code : 431202');
    console.log('Bank Name :- Axis Account Number : 7856782345 Location : Mumbai Pin Code : 441202');
    console.log('Bank Name :- HDFC Bank Account Number : 8956782345 Location : Pune Pin Code : 631202');

    console.log('-------------------Completed--------------------------------');

}
show();


