// Связанный список
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.size = 0;
        this.root = null;
    }
    LinkedList.prototype.add = function (value) {
        if (!this.root) {
            this.root = new ListNode(value);
            this.size += 1;
            return;
        }
        var node = this.root;
        while (node.next) {
            node = node.next;
        }
        node.next = new ListNode(value);
        this.size += 1;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.print = function () {
        var result = [];
        var node = this.root;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        console.log.apply(console, result);
    };
    return LinkedList;
}());
var list = new LinkedList();
list.add(2);
list.add(3);
list.add(1);
list.add(5);
list.add(4);
list.add(7);
list.print();
