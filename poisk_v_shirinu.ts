// Поиск в ширину в графе

type node = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
type Queue<T> = T[];
type Graph = Record<node, Array<node>>;

const contains = (array: node[], value: node): boolean => {
	for (let index = 0; index < array.length; index++) {
		if (array[index] === value) {
			return true;
		}
	}
	return false;
}

const graph: Graph = {
	a: ['b', 'c'],
	b: ['f'],
	c: ['d', 'e'],
	d: ['f'],
	e: ['f'],
	f: ['g'],
	g: [],
};

const breadthSearch = (graph: Graph, start: node, end: node): boolean => {
	let queue: Queue<node> = [];
	queue.push(start);
	while (queue.length > 0) {
		const current = queue.shift();
		if (contains(graph[current as node], end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current as node]];
		}
	}
	return false;
}

console.log(breadthSearch(graph, 'd', 'a'));