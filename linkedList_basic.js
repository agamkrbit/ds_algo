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

module.exports = {
    Node,
    LinkedList
}

