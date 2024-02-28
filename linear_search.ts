// Линейный поиск

const array: number[] = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count: number = 0;

function linearSearch<T>(array: T[], item: T): number {
	for (let index = 0; index < array.length; index++) {
		count++;
		if (array[index] === item) {
			return index
		}
		
	}
	
	return -1;
}
