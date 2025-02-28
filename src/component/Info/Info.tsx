import TextInfo from '../TextInfo/TextInfo';
import { ISensors } from '../../data/sensors';
import { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import ButtonMain from '../ButtonMain/ButtonMain';
import Reminder from '../Reminder/Reminder';
import './info.css';


interface IInfo {
    sensorId: number;
    SENSORS: ISensors;
}


const Info: FC<IInfo> = ({
    sensorId,
    SENSORS
}) => {

    const navigate = useNavigate();

    return(
        <div className='info'>
            <div className='line'/>
            <div className='sensor_number' >Датчик № {sensorId}</div>
            <div className='sensor_type' >Тип : {SENSORS[sensorId].type}</div>
            <div className='line'/>

            <div className='title' >{SENSORS[sensorId].title}</div>

            <div className='box_text'>
                {SENSORS[sensorId].subtitle.map((item, i) => <TextInfo text={item.text} key={i} />)}
            </div>
            
            <ButtonMain
                text='НАЗАД'
                onPress={() => navigate('/')}
                styleBtn={{
                    fontSize: '18px',
                    height: '40px',
                    width: '160px',
                    marginTop: '40px'
                }}
            />
            <div className='line' style={{marginTop: '20px'}}/>
            <Reminder/>
        </div>
    )
};


export default Info;