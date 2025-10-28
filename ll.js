class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isempty() {
        return this.head === null;
    }

    getsize() {
        return this.size;
    }

    prepend(data) {
        const newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    append(data) {
        const newNode = new node(data);
        if (this.isempty()) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    print() {
        let curr = this.head;
        let str = '';
        while (curr) {
            str += curr.data + ' -> ';
            curr = curr.next;
        }
        console.log(str + 'null');
    }
}

const list = new linkedlist();
list.append(1);
list.append(2);
list.append(0);
list.print();
