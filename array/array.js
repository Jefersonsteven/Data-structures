const array = ['Jeffer', 'Karen', 'Oscar', 'Maria' , 'Diego'];

console.log(array);
console.log(array[0]);
array.push('Lavanda');
console.log(array);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    unshift(item) {
        if (item) {
            this.push(item);
            for (let i = this.length -1; i >= 0; i--) {
                this.data[i] = this.data[i - 1];
            }

            this.data[0] = item;
        }

        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        return this.delete(0); 
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
        if (this.length === 0) {
            return undefined;
        }
        
        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i + 1];
        }

        this.pop();
    } 
}


const arr = new MyArray();
arr.push('Jeffer');
arr.push('Carlos');
arr.push('Jefferson');
console.log(arr.push('Maria'));
console.log(arr.get(0));
console.log(arr.pop());
arr.push('Juanita');
console.log(arr);
arr.delete(1);
console.log(arr);
arr.unshift('Escobar');
console.log(arr);
console.log(arr.unshift());
console.log(arr.shift());
console.log(arr);