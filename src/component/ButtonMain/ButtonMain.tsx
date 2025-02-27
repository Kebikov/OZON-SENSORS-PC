import { FC } from "react";


interface IButtonMain {
    onPress: () => void;
    text: string;
}


const ButtonMain: FC<IButtonMain> = ({
    text,
    onPress
}) => {
    return(
        <button 
            style={styles.button}
            onClick={onPress}
        >
            {text}
        </button>
    )
};


const styles: {
    button: CSS
} = {
    button: {
        marginTop: '20px',
        width: '160px',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: 'var(--pink-color)',
        fontSize: '20px',
        fontWeight: '600',
        color: '#fff',
        letterSpacing: '1.4px'
    }
}


export default ButtonMain;