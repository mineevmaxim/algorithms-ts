// Бинарный поиск

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count: number = 0;

const binarySearch = (array: number[], item: number): number => {
	let start: number = 0;
	let end: number = array.length;
	let middle: number;
	let found: boolean = false;
	let position: number = -1;

	while(!found && start <= end) {
		count += 1;
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			found = true;
			position = middle;
			return position;
		}
		if (item < array[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}

	return position;
}

const recursiveBinarySearch = (
	array: number[],
	item: number,
	start: number, 
	end: 
	number
): number => {
	let middle = Math.floor((start + end) / 2);
	if (item === array[middle]) {
		return middle;
	}
	if (item < array[middle]) {
		return recursiveBinarySearch(array, item, start, middle - 1);
	} else {
		return recursiveBinarySearch(array, item, middle + 1, end);
	}
}