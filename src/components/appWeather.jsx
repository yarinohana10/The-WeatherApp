import React, { useEffect, useState } from 'react'
import WeaterInfo from './weaterInfo'
import WeatherForm from './weatherForm'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function AppWeather() {
    const [info, setInfo] = useState({});
    // queryString
    const [query] = useSearchParams();

    useEffect(() => {
        doApi(query.get("q"))
    },[query]);

    const doApi = async(city) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b717cd68ba335accf84c57a6c4b6abbc`
        let resp = await axios.get(url);
        console.log(resp.data);
        setInfo(resp.data);
    }


    return (
        <React.Fragment>
            <WeatherForm doApi = {doApi} />
            {info.name ? <WeaterInfo info={info}  /> : "Loding..." }
        </React.Fragment>
    )
}
