//find unique no is duplicate data set
function findUniqueNoInDuplicateDataset(arr) {
    // initialise by first value beacuse if only one value is thr 
    let val = arr[0];
    for (let index = 1; index < arr.length; index++) {
        console.log(`${val} ^ ${arr[index]} = ${val ^ arr[index]}`);
        val = val ^ arr[index];
    }
    return val;
}


//data set

const dataset = [
    [1, 2, 3, 2, 1],
    [3, 3, 4, 5, 5 ],
    [1]
];

dataset.forEach((arr) => {
    console.log(`${arr} unique value : ${findUniqueNoInDuplicateDataset(arr)}`);
})