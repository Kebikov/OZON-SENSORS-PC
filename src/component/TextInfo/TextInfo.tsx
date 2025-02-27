
const TextInfo = ({text}: {text: string}) => {

    return(
        <div style={styles.textInfo} >✅ {text}</div>
    )
};


const styles: {
    textInfo: CSS
} = {
    textInfo: {
        marginTop: '5px',
        fontSize: '18px',
        fontWeight: '600',
        color: '#fff'
    }
} 


export default TextInfo;