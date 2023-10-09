//lista


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this._size = 0;
    } 
    push(elem) {
        const node = new Node(elem);
        if (this.last === null) {
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        if (this.first === null) {
            this.first = node;
        }

        this._size++;
    }
    pop() {
        if (this._size > 0) {
            const elem = this.first.data;
            this.first = this.first.next;
            
            if (this.first === null) {
                this.last = null;
            }

            this._size--;
            return elem;
        }
        throw new Error("A fila está vazia");
    }
    peek() {
        if (this._size > 0) {
            return this.first.data;
        }
        throw new Error("A fila está vazia");
    }

    get size() {
        return this._size;
    }
    toString() {
        let r = "";
        let pointer = this.first;
        while (pointer) {
            r = r + pointer.data + " ";
            pointer = pointer.next;
        }
        return this._size > 0 ? r : "Fila vazia";
    }
}
const minhaFila = new Queue();

minhaFila.push(1);
minhaFila.push(2);
minhaFila.push(3);
minhaFila.push(4);
minhaFila.push(5);
minhaFila.push(6);

console.log(minhaFila.toString());

console.log(`Primeiro elemento: ${minhaFila.peek()}`);
console.log(`Tamanho da fila: ${minhaFila.size}`);

minhaFila.pop();

console.log(minhaFila.toString());
