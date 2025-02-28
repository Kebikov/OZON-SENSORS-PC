import './radio.css';
import { FC } from 'react';
import { type IBlockValue } from '../../page/Main/Main';


interface Iradio {
    isBlock: IBlockValue;
    setIsBlock: React.Dispatch<React.SetStateAction<IBlockValue>>
}

interface IEl {
    text: string;
    idElement: 'A' | 'B';
}

const Radio: FC<Iradio> = ({
    isBlock,
    setIsBlock
}) => {

    const elements: Array<IEl> = [
        {
            text: 'БЛОК А',
            idElement: 'A'
        },
        {
            text: 'БЛОК Б',
            idElement: 'B'
        }
    ]

    const RadioElement = ({text, idElement}: IEl) => (
        <div className={idElement === isBlock ? 'radio shadow' : 'radio'} onClick={() => setIsBlock(idElement)} >
            <div className='label' >{text}</div>
        </div>
    );
    

    return(
        <div className='button_group' >
            {
                elements.map((item, i) => <RadioElement text={item.text} idElement={item.idElement} key={i} /> )
            }
        </div>
    )
}

export default Radio;