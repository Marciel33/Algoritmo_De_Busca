//pilha
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this._size = 0;
    }

    push(elem) {
        const node = new Node(elem);
        if (this.top === null) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this._size++;
    }

    pop() {
        if (this._size > 0) {
            const elem = this.top.data;
            this.top = this.top.next;
            this._size--;
            return elem;
        }
        throw new Error("A pilha está vazia");
    }


    peek() {
        if (this._size > 0) {
            return this.top.data;
        }
        throw new Error("A pilha está vazia");
    }

    get length() {
        return this._size;
    }

    toString() {
        if (this._size > 0) {
            let r = "";
            let pointer = this.top;
            while (pointer) {
                r = r + pointer.data + " ";
                pointer = pointer.next;
            }
            return r;
        }
        return "Empty Stack";
    }
}


const minhaPilha = new Stack();

minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);
minhaPilha.push(4);
minhaPilha.push(5);
minhaPilha.push(6);
minhaPilha.push(7);
minhaPilha.push(8);
minhaPilha.push(9);

console.log(minhaPilha.toString());

console.log(`Topo da pilha: ${minhaPilha.peek()}`);
console.log(`Tamanho da pilha: ${minhaPilha.length}`);

minhaPilha.pop();

console.log(minhaPilha.toString());
