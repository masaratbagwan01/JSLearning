function checkLeapYear(year) {
    var one = +year;
    if (year<=0 || isNaN(one)) {
        console.log(`invalid data is provided here`);
        return;
        
    }
    if (year%4==0) {
        console.log(`${year} is leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
    
}
checkLeapYear(2020)
checkLeapYear(null)
checkLeapYear(1999)
checkLeapYear(undefined)
checkLeapYear(1600)
checkLeapYear(2022)
checkLeapYear("Twenty Twenty")
checkLeapYear(1945)
checkLeapYear(NaN)
checkLeapYear(1750)