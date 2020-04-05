

function checkIfNumberIsPrime(num) {
    // must be greater than equal to 2
    if (num < 2) return false;
    // if equal to 2 then yes
    if (num === 2) return true;
    // if number is divisble by 2
    if (num % 2 === 0) return false;

    //check if it is divisible by any no less then equal to root(num);

    let divider = 3 // instiallise with 3

    while (divider <= Math.sqrt(num)) {
        //check if number is even return 
        if (divider % 2 === 0) {
            break;
        }

        if (num % divider === 0) {
            console.log(`value : ${num} is divisible by ${divider}`);
            return false;
        }
    }
    return true;
}

const testSet = [2, 3, 5, 6, 99, 111];

testSet.forEach((num) => {
    console.log(`value : ${num} result : ${checkIfNumberIsPrime(num)}`);
})