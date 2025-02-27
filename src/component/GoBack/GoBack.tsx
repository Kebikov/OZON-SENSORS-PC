import {useNavigate} from 'react-router-dom';
import './goBack.css';


const GoBack = () => {

    const navigate = useNavigate();

    return(
        <div className='GoBack' onClick={() => navigate('/')} >
            <div className='GoBack_text' >назад</div>
        </div>
    )
};

export default GoBack;