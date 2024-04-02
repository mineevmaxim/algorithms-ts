const generateGrayCode = (n: number): string[] => {
    if (n <= 0) {
        return [''];
    }

    const prevGrayCode = generateGrayCode(n - 1);
    const result = [];

    for (let i = 0; i < prevGrayCode.length; i++) {
        result.push('0' + prevGrayCode[i]);
    }

    for (let i = prevGrayCode.length - 1; i >= 0; i--) {
        result.push('1' + prevGrayCode[i]);
    }

    return result;
}

// Пример использования
const n = 3;
const grayCode = generateGrayCode(n);
console.log(grayCode);