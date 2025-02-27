import { useParams } from 'react-router-dom';
import { SENSORS_A, SENSORS_B, ISensors } from '../../data/sensors';
import NoData from '../../component/NoData/NoData';
import ImageSensor from '../../component/ImageSensor/ImageSensor';
import GoBack from '../../component/GoBack/GoBack';
import Info from '../../component/Info/Info';
import './sensor.css';


const Sensor = () => {

    const {id} = useParams();

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

    const length = Object.keys(SENSORS).length;

    return(
        <div className='sensor'>
            {
                length > 0 ?
                <>
                    <Info SENSORS={SENSORS} sensorId={sensorId} />
                    <ImageSensor SENSORS={SENSORS} sensorId={sensorId} />
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