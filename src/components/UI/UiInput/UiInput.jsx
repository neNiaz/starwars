import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './UiInput.module.css';
import '../index.css';
import closeIcon from './img/closeIcon.svg';

const UiInput = ({
    value, onChange, placeholder, classes,
}) => (
    <div className={classNames(styles.wrapper__input, classes)}>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img
            className={classNames(
                styles.clear,
                !value && styles.clear__disabled,
            )}
            onClick={() => value && onChange('')}
            src={closeIcon}
            alt="Clear"
        />
    </div>
);

UiInput.propTypes = {
    value: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
};

export default UiInput;
