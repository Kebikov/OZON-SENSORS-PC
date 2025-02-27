import { ISensors } from '../../data/sensors';
import { FC } from 'react';
import './imageSensor.css';


interface IImageSensor {
    SENSORS: ISensors;
    sensorId: number;
}


const ImageSensor: FC<IImageSensor> = ({
    SENSORS,
    sensorId
}) => {
    return(
        <div className='imgBox' >
            <div className='imgSensor' >
                <img className='img' src={String(SENSORS[sensorId].img)} alt='#'/>
            </div>
        </div>
    )
};


export default ImageSensor;