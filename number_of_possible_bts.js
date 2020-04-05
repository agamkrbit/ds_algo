const nMap = new Map();

//value what we know
nMap.set(0, 1);
nMap.set(1, 1);
//get the number of possible BTS 
function getTheNoOfPossibleBTS(n) {

    if ( n <= 1) return nMap.get(n);

    for (let i = 2; i <= n; i++) {
        let sumI = 0;
        for (let j = 0; j < i; j++) {
            sumI += nMap.get(j) * nMap.get(i - j - 1);
        }
        nMap.set(i, sumI);
    }
    return nMap.get(n);
}


//data set
const dataSet = [1, 3, 4, 5];

dataSet.forEach((value) => {
    console.log(`value : ${value} no : ${getTheNoOfPossibleBTS(value)}`);
})