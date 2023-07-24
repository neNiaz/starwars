import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './UiLoading.module.css';
import loaderWhite from './img/loaderWhite.svg';
import loaderBlack from './img/loaderBlack.svg';

const UiLoading = ({ theme = 'white', isShadow = true, classes }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
        case 'black':
            setLoaderIcon(loaderBlack);
            break;
        case 'white':
            setLoaderIcon(loaderWhite);
            break;
        default:
            setLoaderIcon(loaderWhite);
            break;
        }
    });

    return (
        <img
            className={classNames(
                styles.loader,
                isShadow && styles.shadow,
                classes,
            )}
            src={loaderIcon}
            alt="Loading..."
        />
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
};

export default UiLoading;
