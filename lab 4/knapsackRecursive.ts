interface Item {
	name: string;
	weight: number;
	value: number;
}

const knapsackRecursive = (items: Item[], capacity: number, index: number): number => {
    if (index < 0 || capacity === 0) {
        return 0;
    }

    if (items[index].weight > capacity) {
        return knapsackRecursive(items, capacity, index - 1);
    }

    const included = items[index].value + knapsackRecursive(items, capacity - items[index].weight, index - 1);
    const excluded = knapsackRecursive(items, capacity, index - 1);

    return Math.max(included, excluded);
}

const items: Item[] = [
    { name: 'item1', weight: 2, value: 10 },
    { name: 'item2', weight: 3, value: 15 },
    { name: 'item3', weight: 5, value: 20 }
];

const maxWeight = 7;

const maxTotalValue = knapsackRecursive(items, maxWeight, items.length - 1);
console.log('Максимальная стоимость предметов в рюкзаке:', maxTotalValue);
