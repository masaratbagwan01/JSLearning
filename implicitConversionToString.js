// numric string used with + gives string type
let result;

result = '3' + '2';
console.log(result); //"32"
console.log(`result is 32 cause here 3 and 2 is conceted with + sing`);

result = '3' + true;
console.log(result); //"3true"
console.log(`result is 3true cause here 3 and true is conceted with + sing`);

result = '3' + 'undefined';
console.log(result); //"3undefined"
console.log(`result is 3undefined cause here 3 and undefined is conceted with + sing`);

result = '3' + null;
console.log(result); //"3null"
console.log(`result is 3null cause here 3 and  is conceted with + sing`);