// Дерево бинарного поиска

class BinaryTree<T> {
	public root: TreeNode<T> | null;
	public left: TreeNode<T> | null;
	public right: TreeNode<T> | null;

	constructor() {
		this.root = null;
		this.left = null;
		this.right = null;
	}

	public add(value: T): void {
		if (!this.root) {
			this.root = new TreeNode<T>(value);
		} else {
			let node = this.root;
			let newNode = new TreeNode<T>(value);
			while (node) {
				if (value > node.value) {
					if (!node.right) {
						break;
					}
					node = node.right;
				} else {
					if (!node.left) {
						break;
					}
					node = node.left;
				}
			}
			if (value > node.value) {
				node.right = newNode;
			} else {
				node.left = newNode;
			}
		}
	}

	print(root: TreeNode<T> | null = this.root): void {
		if (!root) {
			return;
		}
		console.log(root.value);
		this.print(root.left);
		this.print(root.right);
	}
}

class TreeNode<T> {
	public value: T;
	public left: TreeNode<T> | null;
	public right: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const tree = new BinaryTree();

tree.add(5);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(7);
tree.add(8);
tree.add(9);

tree.print()