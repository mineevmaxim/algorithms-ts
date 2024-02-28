// Поиск в ширину в графе
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var contains = function (array, value) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] === value) {
            return true;
        }
    }
    return false;
};
var graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
    g: [],
};
var breadthSearch = function (graph, start, end) {
    var queue = [];
    queue.push(start);
    while (queue.length > 0) {
        var current = queue.shift();
        if (contains(graph[current], end)) {
            return true;
        }
        else {
            queue = __spreadArray(__spreadArray([], queue, true), graph[current], true);
        }
    }
    return false;
};
console.log(breadthSearch(graph, 'd', 'a'));
