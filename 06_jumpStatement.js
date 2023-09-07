for (let index = 0; index < 10; index++) {
    console.log(`Iteration Start`);
    if (index==5) {
        break;
    }
   console.log(`value is ${index} , Iteration ${index+1}`); 
   console.log(`iteration End`);
   console.log(`***********************************`);
}
console.log(`--------------continue-----------------`);
for (let index = 0; index < 5; index++) {
    if (index==3) {
        continue;
        
    }
    console.log(`value is ${index}, iteration ${index+1}`);
    console.log(`iteration end`);
    console.log(`--------------------------------------------
    `);
    
}