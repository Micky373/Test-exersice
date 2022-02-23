const { stringLength, reverseString, makeCamelCase } = require("./string.js")
const calculator = require("./calculator.js")

describe('Checking string size', () => {
    test('Checking string length', () => {
        expect(stringLength("string")).toBe(6)
    })

    test('Check if string length is higher than 0', () => {
        expect(() => stringLength('')).toThrow("String size error");
    });

    test('Check if string length is lower than 10', () => {
        expect(() => stringLength('stringstring')).toThrow("String size error");
    });
})

test('Check if string is reversed', () => {
    expect(reverseString('string')).toBe("gnirts")
})

let caculating = new calculator

describe('Calculator chcker', () => {
    describe("Addition check", () => {
        test('Check if number correctly added', () => {
            expect(caculating.add(2, 3)).toBe(5)
        })

        test('Check if number correctly added', () => {
            expect(caculating.add(10, 34)).toBe(44)
        })

        test('Check if number correctly added', () => {
            expect(caculating.add(6, 4)).toBe(10)
        })
    })

    describe("Subtraction check", () => {
        test('Check if number correctly subtracted', () => {
            expect(caculating.subtract(3, 2)).toBe(1)
        })
        test('Check if number correctly subtracted', () => {
            expect(caculating.subtract(3, 3)).toBe(0)
        })
        test('Check if number correctly subtracted', () => {
            expect(caculating.subtract(3, 10)).toBe(-7)
        })
    })

    describe("Multiplication check", () => {
        test('Check if number correctly multiplied', () => {
            expect(caculating.multiply(3, 2)).toBe(6)
        })

        test('Check if number correctly multiplied', () => {
            expect(caculating.multiply(5, 2)).toBe(10)
        })

        test('Check if number correctly multiplied', () => {
            expect(caculating.multiply(10, 2)).toBe(20)
        })
    })

    describe("Deviding check", () => {
        test('Check if number correctly divided', () => {
            expect(caculating.divide(10, 2)).toBe(5)
        })
        test('Check if number correctly divided', () => {
            expect(caculating.divide(20, 2)).toBe(10)
        })
        test('Check if number correctly divided', () => {
            expect(caculating.divide(30, 2)).toBe(15)
        })
    })
})

test('Check if camel casing works', () => {
    expect(makeCamelCase("uppercase")).toBe("Uppercase")
})