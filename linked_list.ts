// Связанный список

class ListNode<T> {
	public value: T;
	public next: ListNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList<T> {
	public size: number = 0;
	public root: ListNode<T> | null;
	
	constructor() {
		this.root = null;
	}

	public add(value: T): void {
		if (!this.root) {
			this.root = new ListNode<T>(value);
			this.size += 1;
			return;
		}
		let node = this.root;
		while (node.next) {
			node = node.next;
		}
		node.next = new ListNode<T>(value);
		this.size += 1;
	}

	public getSize(): number {
		return this.size;
	}

	public print(): void {
		let result: Array<T> = [];
		let node = this.root;
		while (node) {
			result.push(node.value);
			node = node.next;
		}
		console.log(...result);
	}
}

const list = new LinkedList()
list.add(2);
list.add(3);
list.add(1);
list.add(5);
list.add(4);
list.add(7);

list.print();