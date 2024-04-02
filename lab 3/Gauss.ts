// Функция решения прямоугольной системы линейных уравнений уравнений методом Гаусса

const gauss = (matrix: Array<number[]>, b: number[]) => {
	const n = matrix.length;
	const augmentedMatrix = matrix.map((row, index) => row.concat(b[index]));

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			const factor = augmentedMatrix[j][i] / augmentedMatrix[i][i];
			for (let k = i; k <= n; k++) {
				augmentedMatrix[j][k] -= factor * augmentedMatrix[i][k];
			}
		}
	}

	// Проверка на наличие решений
    for (let i = 0; i < n; i++) {
        let allZeros = true;
        for (let j = 0; j < n; j++) {
            if (augmentedMatrix[i][j] !== 0) {
                allZeros = false;
                break;
            }
        }
        if (allZeros && augmentedMatrix[i][n] !== 0) {
            return "Нет решений";
        }
    }

	const result = new Array<number>(n);
	for (let i = n - 1; i >= 0; i--) {
		result[i] = augmentedMatrix[i][n];
		for (let j = i + 1; j < n; j++) {
			result[i] -= augmentedMatrix[i][j] * result[j];
		}
		result[i] /= augmentedMatrix[i][i];
	}

	// Проверка на бесконечно много решений
    if (result.includes(NaN)) {
        // Вычисление общего решения как суммы частного решения и линейной комбинации базисных решений
        const basisSolutions = [];
        for (let i = 0; i < n; i++) {
            const basis = new Array(n).fill(0);
            basis[i] = 1;
            const basisSolution = basis.map((val, index) => val * result[index]);
            basisSolutions.push(basisSolution);
        }
        return `Бесконечно много решений. Общее решение: ${result} + t1 * ${basisSolutions[0]} + t2 * ${basisSolutions[1]} + ...`;
    }

	return result;
}


const coefficientsMatrix = [
	[2, -1, 1], 
	[-3, 2, -2], 
	[-2, 1, 1],
];
const constantsVector = [5, -8, -3];
const solution = gauss(coefficientsMatrix, constantsVector);
console.log(solution);