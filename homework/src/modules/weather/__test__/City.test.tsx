import { render, fireEvent, waitFor } from "@testing-library/react";
import { City } from "../City";

test("shuold delete and change temp value city", () => {
  const city = {
    id: 1,
    main: {
      temp: 273,
    },
    name: "Baku",
  };

  const mockOnDelete = jest.fn();
  const mockOnChange = jest.fn();

  const { getByTestId } = render(
    <City city={city} tempValue={mockOnChange} deleteCity={mockOnDelete} />
  );
  fireEvent.click(getByTestId('city-test-delete'));
  expect(mockOnDelete).toBeCalledWith(city.id);
});
