import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import arrow from '../../../static/arrow.svg';

const PersonLinkBack = () => {
    const navigate = useNavigate();
    const handleOnBack = () => {
        navigate(-1);
    };

    return (
        <Link to="/" onClick={handleOnBack} className={styles.link}>
            <img src={arrow} alt="arrow" className={styles.img} />
            <span>
                Go Back
            </span>
        </Link>
    );
};

export default PersonLinkBack;
