import TextInfo from '../TextInfo/TextInfo';
import GoBack from '../GoBack/GoBack';
import { ISensors } from '../../data/sensors';
import { FC } from 'react';
import './info.css';


interface IInfo {
    sensorId: number;
    SENSORS: ISensors;
}


const Info: FC<IInfo> = ({
    sensorId,
    SENSORS
}) => {

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
            
            <GoBack/>
        </div>
    )
};


export default Info;