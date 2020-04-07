const  { Node, LinkedList } =  require('./linkedList_basic');


// 1 -> 2 -> 3 -> 4 
//           6  <- 5


//using hasing 

const linkedList = new LinkedList();
linkedList.addANode(new Node(1));
linkedList.addANode(new Node(2));

const node_3 = new Node(3);

linkedList.addANode(node_3);
linkedList.addANode(new Node(4));
linkedList.addANode(new Node(5));
linkedList.addANode(new Node(6));
linkedList.addANode(new Node(7));
linkedList.addANode(node_3);


const linkedList2 = new LinkedList();
linkedList2.addANode(new Node(1));
linkedList2.addANode(new Node(2));
linkedList2.addANode(new Node(3));
linkedList2.addANode(new Node(4));


function isCyclicUsingHash(linkedList) {
    const nodeSet = new Set();
    let start = linkedList.tail;
    let isCyclic = false;
    
    while (start) {
        //console.log(start)
        if (nodeSet.has(start)) {
            isCyclic = true;
            break;
        }
        nodeSet.add(start);
        start = start.node;
    }

    return isCyclic;
}

function isCyclicUsingFastPointer(linkedList) {
    let slowPointer = linkedList.tail;
    let fastPointer = linkedList.tail && linkedList.tail.node ? linkedList.tail.node : null;
    let isCyclic = null;


    while (slowPointer != null && fastPointer != null) {
        //console.log(slowPointer, fastPointer)
        //console.log('---------------------------')
        if (slowPointer == fastPointer) {
            isCyclic = slowPointer;
            break;
        }
        slowPointer = slowPointer.node;
        fastPointer = fastPointer.node && fastPointer.node.node ? fastPointer.node.node : null;
    }

    return isCyclic;
}

function findAndRemoveycylicNode(linkedList) {
    console.log('LinkedList');

    const nodeInLoop = isCyclicUsingFastPointer(linkedList);
    console.log(nodeInLoop)
    if (nodeInLoop) {
        let nodeCountInLoop = 1;
        let pointer = nodeInLoop.node;
        while (pointer) {
            if (pointer == nodeInLoop) {
                break;
            } else {
                nodeCountInLoop++;
                pointer = pointer.node;
            }
        }
        console.log(nodeCountInLoop);

        let start = 1;
        let nodeAtK = linkedList.tail;

        while (start <= nodeCountInLoop) {
            start++;
            nodeAtK = nodeAtK.node;
        }
        console.log(nodeAtK);
        let startingNode = linkedList.tail;
        let index = 1;
        while (nodeAtK.node != startingNode.node) {
            console.log(nodeAtK, startingNode);
            nodeAtK = nodeAtK.node;
            startingNode = startingNode.node
            index++;
        }

        console.log(nodeAtK.node = null);
        console.log(linkedList.toString());
        return;
    }

    console.log('Answer : not a loop');
}

console.log(`using fast pointer : ${findAndRemoveycylicNode(linkedList)}`);
console.log(`using fast pointer : ${findAndRemoveycylicNode(linkedList2)}`);

