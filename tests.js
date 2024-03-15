// Пузырьковая сортировка
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};

// Быстрая сортировка
const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        }
        else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
};

// Сортировка выбором
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
    return array;
};

const getFunctionTime = (callback, array) => {
    const start = performance.now();
    callback(array);
    const end = performance.now();
    return end - start;
};

const generateRandomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.random());
    }
    return array;
};

const getAverage = (numbers) => {
    return numbers.reduce((acc, number) => acc + number, 0) / numbers.length
} 

const sizes = [
    200,
    300,
    400,
    700,
    1000,
    4000,
    7000,
    10000,
    20000,
    40000,
    70000,
    100000,
    200000,
    400000,
    700000,
    1000000,
];

let times = 11;

const bubbleSortTimes = []
const quickSortTimes = []
const selectionSortTimes = []

const runTests = () => {
    sizes.forEach(size => {
        console.log(`Array size: ${size}`);
        const bubbleSortResults = [];
        const quickSortResults = [];
        const selectionSortResults = [];
        for (let i = 0; i < times; i++) {
            const testArray = generateRandomArray(size);
            const bubbleSortTime = getFunctionTime(bubbleSort, testArray);
            const quickSortTime = getFunctionTime(quickSort, testArray);
            const selectionSortTime = getFunctionTime(selectionSort, testArray);
            bubbleSortResults.push(bubbleSortTime);
            quickSortResults.push(quickSortTime);
            selectionSortResults.push(selectionSortTime);
        }
        if (times > 1) {
            times -= 2;
        }
        bubbleSortTimes.push(getAverage(bubbleSortResults));
        quickSortTimes.push(getAverage(quickSortResults));
        selectionSortTimes.push(getAverage(selectionSortResults));
    });
};

runTests();
console.log(bubbleSortTimes);
console.log(quickSortTimes);
console.log(selectionSortTimes);

console.log('SIZE - BUBBLE - QUICK - SELECTION')
for (let i = 0; i < sizes.length; i++) {
    console.log(`${sizes[i]} - ${bubbleSortTimes[i]} - ${quickSortTimes[i]} - ${selectionSortTimes[i]}`)
}