import React, { useCallback, useState } from "react";
import { Search } from "./Search";
import { weatherService } from "./service";
import { TempTypeRadio } from "./TempTypeRadio";
import { City } from "./City";

export interface IWeatherData {
  id: number;
  main: {
    temp: number;
  };
  name: string;
}

export const WeatherMap = () => {
  const [weatherData, setweatherData] = useState<IWeatherData[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [tempType, setTempType] = useState("Kelvin");

  const handleAdd = useCallback(
    async (
      e: React.KeyboardEvent<HTMLInputElement>,
      searchCityName: string
    ) => {
      e.preventDefault();
      setErrorMessage("");
      await weatherService
        .getWeather(searchCityName)
        .then((res) => {
          let { data } = res;
          if (
            weatherData.every((city) => Number(city.id) !== Number(data.id))
          ) {
            setweatherData([...weatherData, data]);
          } else if (weatherData.length === 0) {
            setweatherData([...weatherData, data]);
          }
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
        });
    },
    [weatherData]
  );

  const tempValue = useCallback(
    (temp: number) => {
      if (tempType === "Celsius") {
        temp = temp - 273.15;
        return `${temp > 0 ? "+" : temp === 0 ? " " : "-"}${temp.toFixed(0)}C`;
      }
      if (tempType === "Fahrenheit") {
        temp = (temp * 9) / 5 - 459.67;
        return `${temp > 0 ? "+" : temp === 0 ? " " : "-"}${temp.toFixed(2)}F`;
      }
      return `${temp > 0 ? "+" : temp === 0 ? " " : "-"}${temp.toFixed(2)}K`;
    },
    [tempType]
  );

  const changeTempType = useCallback((e) => {
    setTempType(e.target.value);
  }, []);

  const deleteCity = useCallback(
    (id: number) => {
      setweatherData(weatherData.filter((city) => city.id !== id));
    },
    [weatherData]
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <Search handleAdd={handleAdd} errorMessage={errorMessage} />
          {weatherData.map((city) => {
            return (
              <City
                key={city.id}
                deleteCity={deleteCity}
                tempValue={tempValue}
                city={city}
              />
            );
          })}
        </div>
        <div className="col-lg-4">
          <TempTypeRadio changeTempType={changeTempType} />
        </div>
      </div>
    </div>
  );
};
