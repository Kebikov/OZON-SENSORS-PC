import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { icon } from '../../source/icon/icon';
import './style.css';


const Main = () => {

    const [id, setId] = useState<number>();


    const navigate = useNavigate();

    const handleInput = (evn: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(evn.target.value));
    }

    return(
        <div className='main' >
            <img className='img_icon' src={icon.icon} alt='#'/>
            <input 
                className='input' 
                type='number' 
                onChange={handleInput}
            />
            <button 
                className='button'
                onClick={() => navigate(`/sensor/${id}`)}
            >
                ЗАПРОС
            </button>
        </div>
    )
}

export default Main;