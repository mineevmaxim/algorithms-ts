// Сортировка выбором

const array: number[] = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32];
let count: number = 0;

const selectionSort = (array: number[]): number[] => {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = 0; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				indexMin = j;
			}
			count++;
		}
		[array[i], array[indexMin]] = [array[indexMin], array[i]];
	}
	
	return array;
}
