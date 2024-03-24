import { FC } from "react";
import s from './Header.module.scss';

const Header:FC = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="../../../public/images/logo.png" alt="logo" />
        </header>
    )
}

export default Header;
