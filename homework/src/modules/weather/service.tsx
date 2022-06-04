import { HttpClient } from "../../httpClient";

class WeatherService extends HttpClient {
    constructor(){
        super('http://api.openweathermap.org/data/2.5');
    }

    async getWeather(city:string){
        return this.get(`weather?q=${city}&appid=16596fe956171a7376f2ba91213e3499`);
    }
}

export const weatherService = new WeatherService();