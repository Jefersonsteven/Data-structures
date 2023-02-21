class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.preview = null;
    }
}


class DoublyLinkedList {
     constructor(value) {
        this.head = {
            value: value,
            next: null,
            preview: null
        };
        this.tail = this.head;
        this.length = 1;
     }

     append(value) {
        const newNode = new Node(value);
        
        newNode.preview = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
     }

     prepend(value) {
        const newNode = new Node(value);
        const current = this.head;

        this.head = newNode;
        this.head.next = current;
        this.length++

        return
     }

     insert(index, value) {
        const newNode = new Node(value);
        let current = this.head;

        if(index >= this.length) {
            return this.append(value);
        }

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        let cache = current.next;
        newNode.next = cache;
        current.next = newNode;
        this.length++
        return this;
     }
     
     delete(value) {
        let current = this.head;
        let cache;
        
        if(current.value === value) {
            cache = current.next;
            current = null;
            current = cache;
            this.head = current;
            this.length--;
            return this;
        }

        for(let i = 0; i < this.length; i++) {
            console.log(current);
            if(current.next.value === value && current.next.next != null) {
                cache = current.next.next;
                current.next = null;
                current.next = cache;
                this.length--;
                return this;
            }

            if (current.next.value === value && current.next.next === null) {
                current.next = null;
                this.tail = current;
                this.length--;
                return this;
            }

            if(current.next != null) {
                current = current.next;
            }
        }

        return undefined;
     }

     remove(value, index) {
        this.delete(value);
        this.insert(index, value);
     }
}


const sll = new DoublyLinkedList(1);
sll.append(2);
sll.append(3);
sll.prepend(4);
sll.insert(4, '5');
sll.remove(4, 2)



console.log(   sll   );