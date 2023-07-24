import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme,
} from '../../../context/ThemeProvider';
import red from './img/red.jpeg';
import green from './img/green.jpeg';
import blue from './img/blue.jpeg';
import styles from './ChooseSide.module.scss';

const ChooseSideItem = ({
    classes, theme, text, img,
}) => {
    const isTheme = useTheme();

    return (
        <div
            className={classNames(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
            role="presentation"
        >
            <div className={styles.item__text}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    );
};

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.func,
    text: PropTypes.string,
    img: PropTypes.string,
};

const ChooseSide = () => {
    const themes = [
        {
            theme: THEME_LIGHT,
            text: 'Light',
            img: red,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            text: 'Dark',
            img: blue,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEITRAL,
            text: 'Neitral',
            img: green,
            classes: styles.item__neitral,
        },
    ];

    return (
        <div className={styles.container}>
            {themes.map((element) => (
                <ChooseSideItem
                    key={element.text}
                    theme={element.theme}
                    text={element.text}
                    img={element.img}
                    classes={element.classes}
                />
            ))}
        </div>
    );
};

export default ChooseSide;
