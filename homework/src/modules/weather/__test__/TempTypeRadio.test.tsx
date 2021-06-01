import { render } from "@testing-library/react";
import { WeatherMap } from "../index";

test("should be label Text", () => {
  const { getByLabelText } = render(<WeatherMap />);
  expect(getByLabelText("Kelvin")).not.toBeUndefined();
  expect(getByLabelText("Fahrenheit")).not.toBeUndefined();
  expect(getByLabelText("Celsius")).not.toBeUndefined();
});
