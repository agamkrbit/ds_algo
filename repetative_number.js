//find the repetative number postive number greater than 0 and less then equal to n
function findTheRepetativeNumber(arr) {
    let answer = -1;
    arr.forEach(value => {
        const referenceIndex = value - 1;
        if( arr[referenceIndex] > 0) {
            arr[referenceIndex] *= -1;
            console.log(arr, referenceIndex);
        } else {
            answer = value;
        }
    });
    console.log(arr);
    return answer;
}


//dataset 
const dataset = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 3]
];


dataset.forEach((arr) => {
    console.log(`${arr} repetative data : ${findTheRepetativeNumber(arr)}`);
})