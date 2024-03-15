// Bubble sort
var array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
var count = 0;
var bubbleSort = function (array) {
    var _a;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                count++;
            }
        }
    }
    return array;
};
console.log(bubbleSort(array));
