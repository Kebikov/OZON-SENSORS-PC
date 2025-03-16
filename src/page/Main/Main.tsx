import {useNavigate} from 'react-router-dom';
import { useState, useRef } from 'react';
import React from 'react';
import Radio from '../../component/Radio/Radio';
import Logo from '../../component/Logo/Logo';
import check from '../../helpers/check';
import Version from '../../component/Version/Version';
import ButtonMain from '../../component/ButtonMain/ButtonMain';
import Minsk from '../../component/Minsk/Minsk';
import './main.css';


export type IBlockValue = 'A' | 'B' | undefined;


const Main = () => {

    const refInput = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const [id, setId] = useState<string | undefined>();
    const [isBlock, setIsBlock] = useState<IBlockValue>(undefined);

    const handleInput = (evn: React.ChangeEvent<HTMLInputElement>) => {
        let inputData = evn.target.value;
        console.log('inputData = ', inputData);
        setId(inputData);
    }

    const onPressButton = () => check({id, isBlock, refInput, setId}) ? navigate(`/sensor/${isBlock}-${id}`) : undefined;

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === "Enter") {
            onPressButton();
        }
    }

    return(
        <div className='main' >
            <div className='container'> 
                <Logo isBlock={isBlock} />
                
                <Radio isBlock={isBlock} setIsBlock={setIsBlock} />
                <div className='box_input'>
                    <input 
                        ref={refInput}
                        className='input' 
                        type='number' 
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        value={id ? id : ''}
                    />
                </div>
                {/* <div className='description'><span id='span' >ПО</span> для быстрого реагирования</div> */}
                <ButtonMain
                    text='ЗАПРОС'
                    onPress={onPressButton}
                />
            </div>
            <Version/>
            <Minsk/>
        </div>
    )
}

export default Main;