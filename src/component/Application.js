import axios from 'axios';
import React, { useState } from 'react';
const Application = () => {


    const [query, setQuery] = useState('London');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            var config = {
                method: 'get',
                url: `http://api.weatherapi.com/v1/forecast.json?key=e0c1a083d9094ababd0211848210510&q=${query}&days=1&aqi=no&alerts=no`,
                headers: {
                    'Accept': 'application/json'
                }
            };

            axios(config)
                .then(function (response) {
                    setWeather(response.data);
                    console.log(weather);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    const searchs = () => {
        var config = {
            method: 'get',
            url: `http://api.weatherapi.com/v1/forecast.json?key=e0c1a083d9094ababd0211848210510&q=${query}&days=1&aqi=no&alerts=no`,
            headers: {
                'Accept': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setWeather(response.data);
                console.log(weather);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function loads() {
        var config = {
            method: 'get',
            url: `http://api.weatherapi.com/v1/forecast.json?key=e0c1a083d9094ababd0211848210510&q=${query}&days=1&aqi=no&alerts=no`,
            headers: {
                'Accept': 'application/json'
            }
        };
        axios(config)
            .then(function (response) {
                setWeather(response.data);
                console.log(weather);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    loads()


    const s = [
        { id: 1, value: "Andijon" },
        { id: 2, value: "Namangan" },
        { id: 3, value: "Farg'ona" },
        { id: 4, value: "Toshkent" },
        { id: 5, value: "Sirdaryo" },
        { id: 6, value: "Jizzah" },
        { id: 7, value: "Samarqand" },
        { id: 8, value: "Buxoro" },
        { id: 9, value: "Navoiy" },
        { id: 10, value: "Qashqadaryo" },
        { id: 11, value: "Surxondaryo" },
        { id: 12, value: "Xorazm" },
        { id: 13, value: "Qoraqalpoq" },
    ]
    const [lists, setLists] = useState('')
    const clickss = (e) => {
        setQuery(e.target.textContent)
    }
    console.log(lists)


    return (
            <div className="main">
                <div className="content-menu">
                    <div className='input'>
                        <div className='input-menu'>
                            <input
                                type="text"
                                className="search"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyPress={search}
                            />
                            <button onClick={searchs} class="submit">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <ul className='ul'>
                            {
                                s.map(res => {
                                    return (
                                        <li class="input_city" onClick={clickss} >{res.value}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {weather.location && (
                        <div className='content_menu'>
                            <h4 className='content-text'>Weather details</h4>
                            <div className='content-row'>
                                <span className='row-title'>Cloudy</span>
                                <span className='row-sub'>{weather.current.cloud}%</span>
                            </div>
                            <div className='content-row'>
                                <span className='row-title'>Humidity</span>
                                <span className='row-sub'>{weather.current.humidity}%</span>
                            </div>
                            <div className='content-row'>
                                <span className='row-title'>Wind</span>
                                <span className='row-sub'>{weather.current.wind_kph}%</span>
                            </div>
                            <div className='content-row'>
                                <span className='row-title'>Rain</span>
                                <span className='row-sub'>{weather.forecast.forecastday[0].hour[0].will_it_rain}</span>
                            </div>
                        </div>
                    )}
                </div>

                {weather.location && (
                    <div className='content'>
                        <h3 className='text'>the.weather</h3>
                        <div className="city">
                            <span className='city-title'>{weather.current.temp_c}&#176;</span>
                            <div className='icon-menu'>
                                <span className='name'>{weather.location.name}</span>
                                <span className='date'>{weather.location.localtime}</span>
                            </div>
                            <div className='iconmenu'>
                                <img className="city-icon" src={weather.current.condition.icon} />
                                <span>{weather.current.condition.text}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    );
};

export default Application;