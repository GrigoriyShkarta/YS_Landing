import { FC } from "react";
import s from './BlockOne.module.scss';

const BlockOne: FC = () => {
    return (
        <div className={s.container}>
            <p className={s.preTitle}>Перший найглибший курс по звуковисотним екстрим-технікам</p>
            <h1 className={s.title}>Rock Star</h1>
            <p className={s.text}>Тривалість: 1.5 / 2.5 місяця <br/> (в залежності від тарифу)</p>
            <p className={s.text}>Старт: ??.??.??</p>
            <div className={s.photo}>
                <button className={s.button}>ЗАПИСАТИСЬ</button>
            </div>
        </div>
    )
}

export default BlockOne;
