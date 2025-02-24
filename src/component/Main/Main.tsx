import {useNavigate} from 'react-router-dom';
import { useState, useRef } from 'react';
import React from 'react';
import { icon } from '../../source/icon/icon';
import { SENSORS_B, SENSORS_A } from '../../data/sensors';
import Radio from '../Radio/Radio';
import './style.css';


const Main = () => {

    const refInput = useRef<HTMLInputElement | null>(null);
    const [id, setId] = useState<string | undefined>();
    console.log('id = ', id);
    const [isBlock, setIsBlock] = useState<'A' | 'B'>('B');

    const navigate = useNavigate();

    const check = (id: string | undefined) => {
        const lengthData = Object.keys(isBlock === 'A' ? SENSORS_A : SENSORS_B).length;
        console.log('lengthData = ',lengthData);

        if(id === undefined) {
            if(refInput.current) refInput.current.placeholder = 'введите номер датчика';
            return false;
        }

        if(!isNaN(Number(id)) && (Number(id) > lengthData || Number(id) === 0)) {
            setId(undefined);
            if(refInput.current) refInput.current.placeholder = 'нет такого датчика'
            return false;
        } else {
            return true;
        }
    }

    const handleInput = (evn: React.ChangeEvent<HTMLInputElement>) => {
        let inputData = evn.target.value;
        console.log('inputData = ', inputData);
        setId(inputData);
    }

    const Version = () => (
        <div className='version' >version 1.0.0</div>
    )

    return(
        <div className='main' >
            <div className='container'> 
                <img className='img_icon' src={icon.icon_2} alt='#' />
                <Radio setIsBlock={setIsBlock} />
                <input 
                    ref={refInput}
                    className='input' 
                    type='number' 
                    onChange={handleInput}
                    value={id ? id : ''}
                />
                <button 
                    className='button'
                    onClick={() => check(id) ? navigate(`/sensor/${isBlock}-${id}`) : undefined}
                >
                    ЗАПРОС
                </button>
            </div>
            <Version/>
        </div>
    )
}

export default Main;