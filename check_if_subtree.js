//reference https://practice.geeksforgeeks.org/problems/check-if-subtree/1

function checkIfSubTree(mainTree, subTree) {

    //console.log(mainTree, subTree);

    if (mainTree.length == 0) return false;

    const subTreeArray = subTree.map(value => value);
    const mainTreeArray = mainTree.map(value => value);

    if (checkIfTreeIsEqual(subTreeArray, mainTreeArray)) return true;

    const [leftSubTree, rightSubTree] = getLeftRightSubTree(mainTreeArray);
    //console.log(mainTree, leftSubTree, rightSubTree);
    return checkIfSubTree(leftSubTree, subTreeArray) || checkIfSubTree(rightSubTree, subTreeArray);
}

function getLeftRightSubTree(mainTree) {
    if (mainTree.length === 1) return [[], []];
    let newArrayL = [];
    let newArrayR = [];
    let level = 1;
    let traverse = true;
    let noOfNL = 0;
    let noOfNR = 0;
    let startingIndexL = 1;
    let startingIndexR = 2;
    let startIndex = 1;
    let endIndex = 2;
    let endingIndexL = 1;
    let endingIndexR = 2;

    while (traverse) {
        noOfNL = 0;
        noOfNR = 0;
        for (let l = startingIndexL; l <= endingIndexL; l++) {
            newArrayL.push(mainTree[l]);
            if (mainTree[l] === 'N') noOfNL++;
        }
        for (let r = startingIndexR; r <= endingIndexR; r++) {
            newArrayR.push(mainTree[r]);
            if (mainTree[r] === 'N') noOfNR++;
        }

        if (newArrayL.length + newArrayR.length === mainTree.length - 1) {
            traverse = false;
        } else {
            startIndex = endIndex + 1;
            endIndex = startIndex + Math.pow(2, level+1) - 2*(noOfNL+noOfNR) - 1;
            if (endingIndexL - startingIndexL + 1 === noOfNL && endingIndexL !== -1) {
                startingIndexL = 0;
                endingIndexL = -1;
            } else {
                startingIndexL = startIndex;
                endingIndexL = startIndex + Math.pow(2, level) - 2*noOfNL - 1;
                
            }
            if (endingIndexR - startingIndexR + 1 === noOfNR && endingIndexR != -1) {
                startingIndexR = 0;
                endingIndexR = -1;
            } else {
                endingIndexR = endIndex;
                startingIndexR = endIndex + 2*(noOfNR) - Math.pow(2, level) + 1;
            }
        }
        //console.log(newArrayL, newArrayR, startingIndexL, endingIndexL, startingIndexR, endingIndexR, startIndex, endIndex);
        level++;
    }

    return [newArrayL, newArrayR];

}

function getLeftSubTree(mainTree) {
    if (mainTree.length === 1) return [];
    
}

function checkIfTreeIsEqual(aTree, bTree) {
    console.log(aTree, bTree);
    const aTreeStr =  aTree.join(" ");
    const bTreeStr =  bTree.join(" ");

    return aTreeStr === bTreeStr;
}


//dataset
const dataset = [
    [['1', '2', '3', 'N', 'N', '4', 'N', 'N', 'N'], ['3', '4', 'N', 'N', 'N']]
]


dataset.forEach((value) => {
    console.log(`values : ${value} is sub tree : ${checkIfSubTree(...value)}`);
})