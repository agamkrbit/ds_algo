class Node {
    constructor(value) {
        this.value = value;
        this.node = null;
    }

    setValue(value) {
        this.value = value;
    }

    setNode(node) {
        this.node = node;
    }

    getValue() {
        return this.value;
    }

    getNode() {
        return this.node
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addANode(node) {
        if (!this.tail) {
            this.tail = node;
        }
        if (this.head) {
            this.head.node = node;
            this.head = node;
        } else {
            this.head = node;
        }
        this.length++;
    }

    toString() {
        let str = [];
        let pointer = this.tail;

        while(pointer) {
            str.push(pointer.value);
            pointer = pointer.node;
        }

        return str.join('->');
    }

}

// 1  2
// 3  4
//  5
//  6

const aLinkedList = new LinkedList();
const bLinkedList = new LinkedList();

aLinkedList.addANode(new Node(1));
aLinkedList.addANode(new Node(3));

bLinkedList.addANode(new Node(2));
bLinkedList.addANode(new Node(4));

node_5 = new Node(5);

aLinkedList.addANode(node_5)
bLinkedList.addANode(node_5)

node_6 = new Node(6);

aLinkedList.addANode(node_6)
bLinkedList.addANode(node_6)

console.log(aLinkedList.toString());
console.log(bLinkedList.toString());


let pointerA = aLinkedList.tail;
let pointerB = bLinkedList.tail;
let intersection = null;

while (pointerA != null && pointerB != null) {
    if (pointerA === pointerB) {
        intersection = pointerA;
        break;
    } else {
        pointerA = pointerA.node;
        pointerB = pointerB.node;
    }
}

console.log(intersection);