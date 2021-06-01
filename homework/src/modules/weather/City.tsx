import { FC } from "react";
import { IWeatherData } from "./index";

export const City: FC<{ city: IWeatherData; tempValue(temp: number): string, 
    deleteCity(id: number) : void}> =
  ({ city, tempValue, deleteCity }) => {
    return (
      <li className="d-flex align-items-center my-3">
        <button
          className="btn btn-outline-secondary me-3"
          type="button"
          onClick={() => deleteCity(city.id)}
        >
          -
        </button>
        <p className="mb-0 fs-5">
          <span>{city.name}</span> {tempValue(city.main.temp)}
        </p>
      </li>
    );
  };
