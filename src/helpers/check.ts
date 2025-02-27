import { SENSORS_A, SENSORS_B } from "../data/sensors";

interface Icheck {
    id: string | undefined;
    isBlock: "A" | "B";
    refInput: React.RefObject<HTMLInputElement | null>;
    setId: React.Dispatch<React.SetStateAction<string | undefined>>
}

const check = ({
    id, 
    isBlock,
    refInput,
    setId
}: Icheck) => {
    const lengthData = Object.keys(isBlock === 'A' ? SENSORS_A : SENSORS_B).length;
    console.log('lengthData = ',lengthData);

    if(id === undefined) {
        if(refInput.current) refInput.current.placeholder = 'введите номер датчика';
        return false;
    }

    if(!isNaN(Number(id)) && (Number(id) > lengthData || Number(id) === 0)) {
        setId(undefined);
        if(refInput.current) refInput.current.placeholder = 'нет такого датчика'
        return false;
    } else {
        return true;
    }
}

export default check;