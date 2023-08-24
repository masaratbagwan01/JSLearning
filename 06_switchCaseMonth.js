var month = function (month) {
    switch (month) {
        case 1:
            console.log(`${month} - janauary`);
            break;

            case 2:
            console.log(`${month} - febuvary`);
            break;
            case 3:
            console.log(`${month} - march`);
            break;
            case 4:
            console.log(`${month} - april`);
            break;
            case 5:
            console.log(`${month} - may`);
            break;
            case 6:
            console.log(`${month} - june`);
            break;
            case 7:
            console.log(`${month} - jully`);
            break;
            case 8:
            console.log(`${month} - augest`);
            break;
            case 9:
            console.log(`${month} - september`);
            break;
            case 10:
            console.log(`${month} - octomber`);
            break;
            case 11:
            console.log(`${month} - november`);
            break;
            case 12:
            console.log(`${month} - december`);
            break;

            default:
                console.log(`${month} - In valid values`);
                console.log(`please provide valid data`);
                break;
        }
        console.log(`----------------End of switch case.--------------------------`);
    }
    month(0)
    month(2)
    month(5)
    month(12)
    month(15)
    month(100)
    month(null)
    month(undefined)