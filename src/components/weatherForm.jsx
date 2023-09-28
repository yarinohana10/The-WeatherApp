import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function WeatherForm(props) {
    const nav = useNavigate();
    const inputRef = useRef();
    
    // let doApi = props.doApi;
    const onSearch = () => {
        // thats where we'd like to send it and send him to homepage
        nav("/?q="+inputRef.current.value)
        // doApi(inputRef.current.value)
    }
   
    return (
        <nav className='container-fluid bg-warning p-2'>
            <div className='container'>
                <div className='row'>
                    <div className='logo col-auto text-light'>
                        <h2>Weather</h2>
                    </div>
                    <div className='d-flex col-md-9'>
                        <input onKeyDown={(e) => {if(e.key == "Enter"){onSearch()}} } ref={inputRef} id='id_input' placeholder='search for town weather...' type='text' className='form-control' />
                        <button onClick={onSearch} id='search_btn' className='btn btn-dark'>Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
