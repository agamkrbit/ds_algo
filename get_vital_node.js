function getVitalNode(arr) {
    const mapping = new Map();

    arr.forEach(connection => {
       const connectionAArray = mapping.get(connection[0]) || []; 
       const connectionBArray = mapping.get(connection[1]) || []; 

       connectionAArray.push(connection[1]);
       connectionBArray.push(connection[0]);

       mapping.set(connection[0], connectionAArray);
       mapping.set(connection[1], connectionBArray);
    });


    const vitalNodes = new Set();

    //console.log(mapping);

    arr.forEach(connection => {
        if (!isReachedWithoutConnection(connection, mapping)) {
            if (mapping.get(connection[0]).length > 1) {
                vitalNodes.add(connection[0])
            }
            if (mapping.get(connection[1]).length > 1) {
                vitalNodes.add(connection[1])
            }
        }

        //console.log(vitalNodes);
    })
    return vitalNodes;
}


function isReachedWithoutConnection(connection, mapping) {
    const isTraversed =  new Set();
    isTraversed.add(connection[0]);
    const toBeTraversed = [];
    let indexOfToBeTraversed = 0;

    mapping.get(connection[0]).forEach((node) => {
        if (node != connection[1]) toBeTraversed.push(node); 
    });

    while (toBeTraversed.length > indexOfToBeTraversed) {
        let reached = false;
        isTraversed.add(toBeTraversed[indexOfToBeTraversed]);
        mapping.get(toBeTraversed[indexOfToBeTraversed])
            .forEach(node => {
                if (node === connection[1]) {
                    reached = true;
                } else {
                    if (!isTraversed.has(node) && !toBeTraversed.includes(node)) {
                        toBeTraversed.push(node);
                    }
                }
            });
        if (reached) return true;
        indexOfToBeTraversed++;
        //console.log(toBeTraversed, indexOfToBeTraversed, connection, isTraversed); 
    }

    return false;
}




//data set 
const dataset = [
    [
        [1, 2], [1, 3], [3, 4], [4, 2], [4, 5], [3, 6], [6, 7]
    ],
    [
        [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6], [5, 7], [6, 7], [7, 8],
        [8, 9], [8, 10], [9, 10]
    ]
]

dataset.forEach((arr) => {
    console.log(getVitalNode(arr));
})