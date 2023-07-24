import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './UiButton.module.css';
import '../index.css';

const UiButton = ({
    text,
    onClick,
    disabled,
    theme = 'dark',
    classes,
}) => (
    <button
        onClick={onClick}
        className={classNames(styles.button, styles[theme], classes)}
        disabled={disabled}
    >
        {text}
    </button>
);

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
};

export default UiButton;
