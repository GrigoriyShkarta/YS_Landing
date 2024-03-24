import { FC } from "react";
import s from './BlockOne.module.scss';

const BlockOne: FC = () => {
    return (
        <div className={s.container}>
            <h3 className={s.text}>Курс по звуковисотному екстрим вокалу</h3>
            <h1 className={s.title}>ROCK STAR</h1>
            <p className={s.text}>тривалість 1.5 - 2 місяця</p>
        </div>
    )
}

export default BlockOne;
