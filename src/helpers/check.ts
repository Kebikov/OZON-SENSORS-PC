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