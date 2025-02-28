import { SENSORS_A, SENSORS_B } from "../data/sensors";
import { IBlockValue } from "../page/Main/Main";

interface Icheck {
    id: string | undefined;
    isBlock: IBlockValue;
    refInput: React.RefObject<HTMLInputElement | null>;
    setId: React.Dispatch<React.SetStateAction<string | undefined>>
}

const check = ({
    id, 
    isBlock,
    refInput,
    setId
}: Icheck) => {

    if(isBlock === undefined) {
        if(refInput.current) {
            refInput.current.value = '';
            refInput.current.placeholder = 'выберите блок'
        };
        return false;
    }

    const dataSensor = isBlock === 'A' ? SENSORS_A : SENSORS_B;
    const arrayKey = Object.keys(dataSensor);

    if(id === undefined) {
        if(refInput.current) refInput.current.placeholder = 'введите номер датчика';
        return false;
    }

    if(arrayKey.includes(id)) {
        return true;
    } else {
        setId(undefined);
        if(refInput.current) refInput.current.placeholder = 'нет такого датчика'
        return false;
    }
}

export default check;

