import { icon } from '../../source/icon/icon';
import './reminder.css';


const Reminder = () => {

    const Note = ({
        img,
        text
    }: {
        img: string;
        text: string;
    }) => (
        <div className='note' >
            <div className='note__text-img-box' >
                <img className='note__text-img' src={img} alt='#' />
            </div>
            <div className='note__text'>{text}</div>
        </div>
    )

    return(
        <div className="reminder">
            <div className='reminder__body'>
                <div className='reminder__box-title'>
                    <div className='reminder__title-img-box' >
                        <img className='reminder__title-img' src={icon.remember} alt='#' />
                    </div>
                    <div className='reminder__title'>Не забудь !!!</div>
                </div>
                <Note img={icon.phone} text={'Позвони 101 в случае подтверждения возгорания или АРДД для нажатия кнопки "Молния".'} />
                <Note img={icon.key} text={'Возьми ключ от помещения, где произошла сработка.'} />
                <Note img={icon.electro} text={'Сообщи электромеханику, что возможно понадобится отключить электроинергию.'} />
                <Note img={icon.group} text={'Проинформируй заинтересованных лиц согластно схеме оповещения.'} />
            </div>
        </div>
    )
};

// Позвони в БелПартАльянс.
// 
// 
// 
export default Reminder;

