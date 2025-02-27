import './radio.css';
import { FC } from 'react';


interface Iradio {
    setIsBlock: React.Dispatch<React.SetStateAction<"A" | "B">>
}


const Radio: FC<Iradio> = ({setIsBlock}) => {

    const onSelect = () => {
        let res = '';
        const form = document.forms;
        const block = form[0].block as NodeListOf<HTMLInputElement>;
        block.forEach(item => {
            if(item.checked){
                res = item.value;
                setIsBlock(res as 'A' | 'B');
            }
        })
    }
    
    return(
        <form  name='formBlocks' action="#" className='form' >
            <div className='radio'>
                <input className='radio_input' onChange={onSelect} name='block' type={'radio'} id='A' value={'A'} />
                <label className='label' htmlFor='A' >БЛОК А</label>
            </div>
            <div className='radio'>
                <input className='radio_input' onChange={onSelect} name='block' type={'radio'} id='B' value={'B'} defaultChecked />
                <label  className='label' htmlFor='B' >БЛОК Б</label>
            </div>
        </form>
    )
}

export default Radio;