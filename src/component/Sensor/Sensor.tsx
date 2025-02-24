import {useParams, useNavigate} from 'react-router-dom';
import { SENSORS_A, SENSORS_B, ISensors } from '../../data/sensors';
import NoData from '../NoData/NoData';
import './style.css';


const Sensor = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    console.log(id);

    let SENSORS: ISensors = {};
    let sensorId = 0;
    let blockId = '';

    if(id) {
        let splitId = id.split('-');
        blockId = splitId[0];
        sensorId = Number(splitId[1]);
    }

    switch (blockId) {
        case 'A':
            SENSORS = SENSORS_A;
            break;
        case 'B':
            SENSORS = SENSORS_B;
            break;
    }


    const TextInfo = ({text}: {text: string}) => (
        <div className='TextInfo' >✅ {text}</div>
    )

    const GoBack = () => (
        <div className='GoBack' onClick={() => navigate('/')}>
            <div className='GoBack_text' >назад</div>
        </div>
    )


    const Info = () => (
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

    const Image = () => (
        <div className='imgBox' >
            <div className='imgSensor' >
                <img className='img' src={String(SENSORS[sensorId].img)} alt='#'/>
            </div>
        </div>
    )


    const length = Object.keys(SENSORS).length;

    return(
        <div className='sensor'>
            {
                length > 0 ?
                <>
                    <Info/>
                    <Image/>
                </>
                :
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <NoData/>
                    <GoBack/>
                </div>
            }
        </div>
    )
}

export default Sensor;