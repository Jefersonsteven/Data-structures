class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        key.split('').forEach((element, i ) => hash += ((element.charCodeAt() * i)));

        return hash % this.data.length;
    }

    set(key, value) {
        const address = this.hashMethod(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        const currentBucket = this.data[address];
        for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i] = [key, value];
                }     
        }

        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }
       
    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    let arr = currentBucket[i];
                    currentBucket.splice(i, 1);
                    
                    return arr;
                }
            }
        }
        return undefined;
    }

    getAllKeys() {
        const data = this.data;
        const keys = [];

        for(let i = 0; i < data.length; i++) {
            if (data[i]) {
                for(let i2 = 0; i2 < data[i].length; i2++) {
                    if (data[i][i2]) {
                        keys.push(data[i][i2][0]);
                    }
                }
            }
        }
        return keys;
    }
}

const ht = new HashTable(30);

console.log(ht.hashMethod('Jefer'));
console.log(ht.hashMethod('Jeferf'));
console.log(ht.set('JesAafef', 5465218));
console.log(ht.set('Jefer', 4574));
console.log(ht.set('Jeferf', 457472121));
console.log(ht.set('mamo', 457472121));
console.log(ht.set('ppwmdf', 457472121));
console.log(ht.get('Jefer'));
console.log(ht.get('Jefer'));
console.log(ht.set('Jefer', 957));
console.log(ht.set('JesAafef', 5465218));
console.log(ht.get('Jefer'));
console.log(ht.data);
console.log(ht.delete('Jefer'));
console.log(ht.data)
console.log(ht.getAllKeys());