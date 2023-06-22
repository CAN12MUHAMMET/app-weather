
import { useNavigate } from "react-router-dom";
import { fetchContent } from "../Redux/WeatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { cities } from "./cities";
import Select from "react-select";
import "../components/Weather.css";

const WeatherPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const weatherSlice = useSelector((state) => state.content);

  const handleCityChange = (selectedOption) => {
    dispatch(fetchContent(selectedOption.value));
  };

  const handleLogout = () => {
    navigate("/Login", { replace: true });
    sessionStorage.removeItem("key");
  };
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col">
          <div className="card main">
            <div className="card-body">
              <form>
                <div className="form-group d-flex align-item-center justify-content-center">
                  <Select
                    className="selected mb-4 mt-4"
                    id="cityInput"
                    options={cities.map((city) => ({
                      value: city.name,
                      label: city.name,
                    }))}
                    onChange={handleCityChange}
                    placeholder="Şehir adı girin"
                  />
                </div>
              </form>
              {weatherSlice.status === "success" && (
                <div className="weather-info">
                  <div className="Appİnformation">
                    <div className="DocWeather d-flex align-items-center justify-content-space-around text-center">
                      <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                            <h2>{weatherSlice.content?.main?.temp}°C</h2>
                            <div>
                              {weatherSlice.content?.weather?.[0]?.description}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex justify-content-center">
                              <div>
                                <img
                                  src={`https://openweathermap.org/img/wn/${weatherSlice.content?.weather?.[0]?.icon}@2x.png`}
                                     alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="my-5 text-center">
                      <strong>{weatherSlice.content?.name}</strong>
                    </h5>
                    <div className="weather-main my-5">
                      <div className="weather">
                        <img
                          alt=""
                          src="https://img.icons8.com/fluency/48/000000/hygrometer.png"
                        />
                        <div>
                          %{weatherSlice.content?.main?.humidity} <br />{" "}
                          Humidity
                        </div>
                      </div>
                      <div className="weather">
                        <img
                          alt=""
                          src="https://img.icons8.com/fluency/48/000000/wind.png"
                        />
                        <div>
                          %{weatherSlice.content?.wind?.speed.toFixed(0)} <br />{" "}
                          Wind
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={handleLogout}
                style={{ width: "50%" }}
                className="btn btn-danger d-block mt-3 mx-auto">
                Çıkış
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
