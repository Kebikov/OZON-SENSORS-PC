import { FC } from "react";
import './buttonMain.css';

interface IButtonMain {
    onPress: () => void;
    text: string;
    styleBtn?: React.CSSProperties;
}


const ButtonMain: FC<IButtonMain> = ({
    text,
    onPress,
    styleBtn
}) => {
    return(
        <button 
            style={styleBtn}
            className="buttonMain"
            onClick={onPress}
        >
            {text}
        </button>
    )
};


export default ButtonMain;