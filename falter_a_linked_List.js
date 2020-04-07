class Node {
    constructor(value) {
        this.value = value;
        this.root = null;
        this.next = null;
    }

    addNext(node) {
        this.next = node;
    }

    addRoot(node) {
        this.root = node;
    }
}

class LinkedListWithMultipleRoot {
    constructor() {
        this.root = null
    }

    addRoot(node) {
        if (!this.root) {
            this.root = node;
        } else {
            let pointer = this.root;

            while (pointer.root) {
                pointer = pointer.root;
            }

            pointer.root = node;
        }
    }

    addNext(node, rootValue) {
        let rootNode = null;

        if (this.root.value === rootValue) {
            rootNode = this.root;
        } else {
            let pointer = this.root.root;

            while (pointer) {
                if (pointer.value === rootValue) {
                    rootNode = pointer;
                    break;
                }
                pointer = pointer.root;
            }
        }

        //console.log(rootNode.value, node);
        
        if (rootNode) {
            let pointer = rootNode;

            while (pointer.next) {
                pointer = pointer.next;
            }

            pointer.next = node;
        }

        //console.log(rootNode);
    }

    addNextSimple(node) {
        if (!this.root) {
            this.root = node;
        } else {
            let pointer = this.root;

            while (pointer.next) {
                pointer = pointer.next;
            }

            pointer.next = node;
        }
    }
}


const linkedListWithMultiRoot = new LinkedListWithMultipleRoot();


linkedListWithMultiRoot.addRoot(new Node(5));
linkedListWithMultiRoot.addRoot(new Node(10));
linkedListWithMultiRoot.addRoot(new Node(19));
linkedListWithMultiRoot.addRoot(new Node(28));

linkedListWithMultiRoot.addNext(new Node(7), 5);
linkedListWithMultiRoot.addNext(new Node(8), 5);
linkedListWithMultiRoot.addNext(new Node(30), 5);

linkedListWithMultiRoot.addNext(new Node(20), 10);

linkedListWithMultiRoot.addNext(new Node(22), 19);
linkedListWithMultiRoot.addNext(new Node(50), 19);
//console.log(linkedListWithMultiRoot);

linkedListWithMultiRoot.addNext(new Node(35), 28);
linkedListWithMultiRoot.addNext(new Node(40), 28);
linkedListWithMultiRoot.addNext(new Node(45), 28);


//console.log(linkedListWithMultiRoot);




function flattenLinkedList(linkedList) {
    const flatLinkedList = new LinkedListWithMultipleRoot();
    const roots = [];

    let pointer = linkedList.root;

    while (pointer) {
        roots.push(pointer);
        pointer = pointer.root;
    }

    let traverse = true;

    while (traverse) {
        if (roots.filter(value => value != null).length === 0 ) {
            traverse = false;
            break;
        } else {
            let smallest = roots.filter(value => value != null)[0];
            let index;
            roots.forEach((root, idx) => {
                if (root) {
                    if (root.value <= smallest.value) {
                        smallest = root;
                        index = idx;
                    }
                }
            });
            flatLinkedList.addNextSimple(new Node(smallest.value));
            roots[index] = roots[index].next;
        }

        console.log(roots);
    }

    return flatLinkedList;
}

const flat = flattenLinkedList(linkedListWithMultiRoot);


let pointer = flat.root;

while (pointer) {
    console.log(pointer.value);
    pointer = pointer.next;
}

