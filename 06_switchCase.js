var dayofweek = function (day) {
    switch (day) {
        case 1:
            console.log(`${day} - monday`);
            console.log(`monday is start day for week`);
            break;
        case 2:
            console.log(`${day} - tuesday`);
            break;
        case 3:
            console.log(`${day} - wenseday`);
            break;
        case 4:
            console.log(`${day} - thursday`);
            break;
        case 5:
            console.log(`${day} - friday`);
            console.log(`friday is half day for muslim religion only`);
            break;
        case 6:
            console.log(`${day} - saturday`);
            console.log(`saturday is holiday`);
            break;
        case 7:
            console.log(`${day} - sunday`);
            console.log(`sunday is holiday`);
            break;

        default:
            console.log(`${day} - In valid values`);
            console.log(`please provide valid data`);
            break;
    }
    console.log(`----------------End of switch case.--------------------------`);
}
dayofweek(2)
dayofweek(4)
dayofweek(6)
dayofweek(7)
dayofweek(3)
dayofweek(100)
dayofweek(null)
dayofweek(undefined)
dayofweek("GK")
