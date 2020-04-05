//reference link https://practice.geeksforgeeks.org/problems/trapping-rain-water/0


function trappingRainWaterAre(arr) {
    let sumTillNo = 0;
    let mapping = findNonZeroIndexAndValue(arr);
    
    if (mapping.length <= 1) return sumTillNo;

    let mappindIndex = 0;
    while (mappindIndex < mapping.length-1) {
        sumTillNo += findSumFromMappinIndex(mappindIndex, mapping);
        mappindIndex++;
    }
    return sumTillNo;

}

function findNonZeroIndexAndValue(arr) {
    let value = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > 0) {
            value.push({
                index : index,
                value : arr[index]
            })
        }
    }
    return value;
}

function findSumFromMappinIndex(index, mapping) {
    let localSum = 0;
    const start = mapping[index];
    let highestHeightBelowStart = 0;
    let nextIndex = index + 1;
    let next = mapping[nextIndex] || null;

    while(start.value > highestHeightBelowStart && next) {
        if (next.value > highestHeightBelowStart) {
            localSum += (next.index - start.index - 1) * (Math.min(start.value, next.value) - highestHeightBelowStart);
            highestHeightBelowStart = next.value;
        }
        //console.log(start, next, localSum, highestHeightBelowStart);
        nextIndex++;
        next = mapping[nextIndex] || null;
    }

    return localSum;

}


//dataset

//dataset 
const dataset = [
   [3, 0, 0, 2, 0, 4],
   [0, 0, 0],
   [2, 0, 0],
   [3, 0, 4],
   [4, 0, 0, 4],
   [3, 4, 3],
   [0, 4, 0, 3, 0],
];


dataset.forEach((arr) => {
    console.log(`${arr} sum : ${trappingRainWaterAre(arr)}`);
})