const {
  sumArray,
  countWords,
  findMax,
  isDivisible,
} = require("../functions");

// =====================
// Tests para sumArray
// =====================
describe("sumArray(numbers)", () => {
  test("arreglo de números positivos", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  test("arreglo de números negativos", () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });

  test("arreglo vacío retorna 0", () => {
    expect(sumArray([])).toBe(0);
  });

  test("arreglo que incluye 0", () => {
    expect(sumArray([0, 5, 0, 2])).toBe(7);
  });
});

// =====================
// Tests para countWords
// =====================
describe("countWords(text)", () => {
  test("cadena de texto normal", () => {
    expect(countWords("Hola mundo esto es una prueba")).toBe(6);
  });

  test("espacios al inicio y final", () => {
    expect(countWords("   Hola mundo   ")).toBe(2);
  });

  test("cadena vacía retorna 0", () => {
    expect(countWords("")).toBe(0);
  });

  test("espacios consecutivos entre palabras", () => {
    expect(countWords("Hola   mundo   esto   es   prueba")).toBe(5);
  });
});

// =====================
// Tests para findMax
// =====================
describe("findMax(numbers)", () => {
  test("números positivos", () => {
    expect(findMax([5, 2, 9, 3])).toBe(9);
  });

  test("números negativos", () => {
    expect(findMax([-10, -5, -30])).toBe(-5);
  });

  test("arreglo vacío retorna null", () => {
    expect(findMax([])).toBeNull();
  });

  test("todos los números iguales", () => {
    expect(findMax([7, 7, 7, 7])).toBe(7);
  });
});

// =====================
// Tests para isDivisible
// =====================
describe("isDivisible(num, divisor)", () => {
  test("números divisibles", () => {
    expect(isDivisible(10, 2)).toBe(true);
  });

  test("números no divisibles", () => {
    expect(isDivisible(10, 3)).toBe(false);
  });

  test("divisor 0 retorna mensaje de error", () => {
    expect(isDivisible(10, 0)).toBe("No se puede dividir entre cero");
  });

  test("números negativos", () => {
    expect(isDivisible(-10, 2)).toBe(true);
    expect(isDivisible(-10, 3)).toBe(false);
  });
});
