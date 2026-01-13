import { describe, expect, test } from "vitest";
import { add } from "./math.helper";

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
});
