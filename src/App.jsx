import { useState } from "react";
import "./App.css";
import cloudySky from "./image/cloudySky.jpg";
import getFormattedWetherData, {
  iconUrlFromCode,
} from "./services/weatherService";
import { useEffect } from "react";
import TimeAndLocation from "./Components/TimeAndLocation";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";

function App() {
  const [query, setQuery] = useState({ q: "kerala" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWetherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log("ll", weather);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div
        className=" w-full h-full bg-fixed  "
        style={{ backgroundImage: `url(${cloudySky})` }}
      >
        <div className=" rounded-md  md:w-1/3  mx-auto my-4">
          {weather && (
            <>
              <div className="md:bg-gray-300 md:bg-opacity-50 py-4  rounded-sm ">
                <div className="mx-auto">

            <Inputs  setQuery={setQuery} units={units} setUnits={setUnits}  />
                </div>
                <div className="m-4 ">
                  <TimeAndLocation weather={weather} />

                  <p className=" text-5xl font-bold  text-white text-center">
                    {Math.floor(weather.temp)} °C
                  </p>
                  <div className="flex flex-row justify-center  p-1">
                    <img
                      src={iconUrlFromCode(weather.icon)}
                      className="w-12 my-1"
                      alt=""
                    />
                    <p className="text-white text-center mt-3 pt-1">
                      {weather.details}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-gray-300 bg-opacity-50 py-4 mt-4 rounded-sm text-white ">
                <div className="flex justify-evenly text-base ">
                  <div className="">
                    <p className="py-1">Real feel : {weather.feels_like} °C</p>
                    <p className="py-1">Wind speed : {weather.speed} Km/h</p>
                    <p className="py-1">Max temp : {weather.temp_max} °C</p>
                  </div>
                  <div className="">
                    <p className="py-1"> Humidity : {weather.humidity} %</p>
                    <p className="py-1">Pressure : {weather.pressure} mbar</p>
                    <p className="py-1">Min temp : {weather.temp_min} °C</p>
                  </div>
                </div>
                {/* sunrise/sunset */}
                {/* <div className="relative">
                  <div class="flex items-center justify-center h-16 ">
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                </div> */}
              </div>

              <div className=" bg-gray-300 bg-opacity-50 py-4 mt-4 rounded-sm text-white flex flex-col  ">
                <Forecast title="Hourly forecast" items={weather.hourly} />
                <Forecast title="Daily forecast" items={weather.daily} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
