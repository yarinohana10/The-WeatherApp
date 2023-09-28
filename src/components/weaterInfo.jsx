import React from 'react'

export default function WeaterInfo(props) {
    let info = props.info;

    return (

        <div className='container text-center mt-3'>
            <h2 className='display-4'>Weather of {info.name} </h2>
            <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt='weater icon' width="150" />
            <h3>condition:{info.weather[0].main} </h3>
            <h3>Temprature: {info.main.temp} C </h3>
            <h3>wind: {info.wind.speed}kmh </h3>
        </div>
    )
}
