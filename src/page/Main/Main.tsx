import {useNavigate} from 'react-router-dom';
import { useState, useRef } from 'react';
import React from 'react';
import Radio from '../../component/Radio/Radio';
import Logo from '../../component/Logo/Logo';
import check from '../../helpers/check';
import Version from '../../component/Version/Version';
import ButtonMain from '../../component/ButtonMain/ButtonMain';
import './main.css';


const Main = () => {

    const refInput = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const [id, setId] = useState<string | undefined>();
    const [isBlock, setIsBlock] = useState<'A' | 'B'>('B');

    const handleInput = (evn: React.ChangeEvent<HTMLInputElement>) => {
        let inputData = evn.target.value;
        console.log('inputData = ', inputData);
        setId(inputData);
    }


    return(
        <div className='main' >
            <div className='container'> 
                <Logo/>
                <Radio setIsBlock={setIsBlock} />
                <input 
                    ref={refInput}
                    className='input' 
                    type='number' 
                    onChange={handleInput}
                    value={id ? id : ''}
                />
                <ButtonMain
                    text='ЗАПРОС'
                    onPress={() => check({id, isBlock, refInput, setId}) ? navigate(`/sensor/${isBlock}-${id}`) : undefined}
                />
            </div>
            <Version/>
        </div>
    )
}

export default Main;