import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
import UiButton from '../UI/UiButton';

const PeopleNavigation = ({
    getResource, nextPage, prevPage, counterPage,
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
};

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    counterPage: PropTypes.number,
};

export default PeopleNavigation;
