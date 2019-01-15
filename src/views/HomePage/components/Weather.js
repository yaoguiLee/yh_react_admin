import React from 'react';
const Weather = ({province, city, weather, png, temperature}) => {
  return (
    <div className="yh_weather_container">
      <div className="yh_weather_left">
        <img src={png} alt="weather" width="80" height="80"/>
        <p style={{margin: '0 auto'}}>{weather}</p>
      </div>
      <div className="yh_weather_right">
        <h1 className="yh_weather_temperature">{`${temperature}°`}</h1>
        <p>{ city }</p>
      </div>
    </div>
  )
}
export default Weather;