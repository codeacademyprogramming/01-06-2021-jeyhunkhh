import { Search } from "../Search";
import { weatherService } from "../service";
import { render, fireEvent, waitFor } from "@testing-library/react";

jest.mock("../service");


test("shuold delete and change temp value city", async () => {
  const searchCityName = "Baku"

  weatherService.getWeather.mockResolvedValue("baku");
  const mockOnAdd = jest.fn();

  const { getByTestId } = render(
    <Search errorMessage="" handleAdd={mockOnAdd} />
  );

  fireEvent.keyUp(getByTestId("add-search"), {
    key: "Enter",
    code: "Enter",
  });

  await waitFor(()=>{
    expect(getByTestId("Baku")).not.toBeUndefined();
  })
});
