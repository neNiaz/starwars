import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Favourite from '../Favourite';
import appleIcon from './img/apple.svg';
import baiIcon from './img/bai.svg';
import blenderIcon from './img/blender.svg';
import {
    THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme,
} from '../../context/ThemeProvider';

const Header = () => {
    const isTheme = useTheme();
    const [icon, setIcon] = useState(appleIcon);

    useEffect(() => {
        switch (isTheme.theme) {
        case THEME_LIGHT:
            setIcon(appleIcon);
            break;
        case THEME_DARK:
            setIcon(baiIcon);
            break;
        case THEME_NEITRAL:
            setIcon(blenderIcon);
            break;
        default:
            setIcon(appleIcon);
        }
    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="icon" />

            <ul className={styles.list__container}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/people/?page=1">People</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/fail">Fail</NavLink>
                </li>
            </ul>
            <Favourite />
        </div>
    );
};

export default Header;
