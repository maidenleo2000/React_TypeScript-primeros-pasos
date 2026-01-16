import { describe, expect, test } from "vitest";
import MyAwesomeApp from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("ver render de nombre y apellido", () => {
    // render(<MyAwesomeApp />);
    const { container } = render(<MyAwesomeApp />);

    //const { container } = render(<MyAwesomeApp />);
    // console.log(document.body);
    //console.log(container.innerHTML);
    // console.log(screen.debug);
    // screen.debug();
    const h1 = container.querySelector("h1");
    const h3 = container.querySelector("h3");

    // console.log(h1?.innerHTML);
    // expect(h1?.innerHTML).toBe("Leandro");
    expect(h1?.innerHTML).toContain("Leandro");
    expect(h3?.innerHTML).toContain("Martello");
    // expect(1).toBe(2);
  });
  test("ver render de nombre y apellido - screen", () => {
    // render(<MyAwesomeApp />);
    render(<MyAwesomeApp />);
    screen.debug();
    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });
    const h1 = screen.getByTestId("first-name-title");
    console.log(h1.innerHTML);
    expect(h1?.innerHTML).toContain("Leandro");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test("should match snapshot", () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId("div-app")).toMatchSnapshot();
  });
});
