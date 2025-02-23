import {NavLink, useParams} from 'react-router-dom';
import { SENSORS } from '../../data/sensors';

const Sensor = () => {

    const {id} = useParams();
    const idSensor = id ? Number(id) : 1;


    return(
        <div>
            <h1>{SENSORS[idSensor].title}</h1>
            <NavLink to={'/'} >Go Main</NavLink>
        </div>
    )
}

export default Sensor;