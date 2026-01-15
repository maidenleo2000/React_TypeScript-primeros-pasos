import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    //   console.log("hola mundo");
    //! 1. Arrange
    const a = 1;
    const b = 2;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    //   expect(result).toBe(4);
    expect(result).toBe(a + b);

    //   const result = add(1, 3);
    //   console.log({ result });

    //   expect(result).toBe(4);
  });

  test("should add two negatives numbers", () => {
    const a = -1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("substract two positives numbers", () => {
    //! 1. Arrange
    const a = 53;
    const b = 5;

    //! 2. Act
    const result = substract(a, b);

    //! 3. Assert
    expect(result).toBe(a - b);
  });
  test("substract with one negative number", () => {
    const a = 53;
    const b = -5;

    const result = substract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("multiply two positive numbers", () => {
    //! 1. Arrange - DATOS
    const a = 4;
    const b = 7;

    //! 2. Act - FUNCION A PROBAR
    const result = multiply(a, b);

    //! 3. Assert - ACIERTO --> QUE ESPERAR QUE PASE
    expect(result).toBe(a * b);
  });
  test("multiply one negative number", () => {
    const a = 4;
    const b = -7;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test("multiply with 0 number", () => {
    const a = 4;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
