import { icon } from '../../source/icon/icon';
import './logo.css';
import { IBlockValue } from '../../page/Main/Main'; 
import { FC } from 'react';

interface ILogo {
    isBlock: IBlockValue;
}

const Logo: FC<ILogo> = ({
    isBlock
}) => {

    return (
        <div className="logo" >
            <div className="opj" >
                <img 
                    style={isBlock === 'A' ? {transform: 'rotateY(180deg)'} : undefined}
                    src={icon.poj} 
                    alt="#" 
                />
            </div>
            <div className='img__down' >
                <img src={icon.down_logo} alt='#' />
            </div>
        </div>
    )
}


export default Logo;