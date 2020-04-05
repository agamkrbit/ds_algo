function mirrorBTSTree(str) {
    let depth = 0;
    let startingIndex = 0;
    let endIndex = 0;

    while (startingIndex < str.length) {
        let noofN = 0;
        str = str.substr(0, startingIndex) + 
            str.substr(startingIndex, endIndex - startingIndex + 1).split("").reverse().join("") +
            str.substr(endIndex + 1);
        noofN = str.substr(startingIndex, endIndex - startingIndex + 1).split("")
            .filter(value => {
                return (value === 'N');
            }).length;
        depth = depth + 1;
        startingIndex = endIndex + 1;
        endIndex = startingIndex + Math.pow(2, depth) - 2*noofN -1;
    }
    
    return str;
}

//dataset
const dataset = ["123NN46N5NN7N", "12N3N"];

dataset.forEach((value) => {
    console.log(`${value} => ${mirrorBTSTree(value)}`);
})