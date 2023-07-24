import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './PersonFilms.module.css';
import { changeHTTP, makeConcurrentRequest } from '../../../utils/network';

const PersonFilms = ({ personFilms }) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);

            setFilmsName(response);
        })();
    }, []);

    console.log('filmsName', filmsName);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({ title, episode_id }) => (
                        <li key={episode_id} className={styles.list__item}>
                            <span className={styles.item__episode}>
                                Episode
                                {' '}
                                {episode_id}
                            </span>
                            <span className={styles.item__colon} />
                            <span className={styles.item__title}>
                                {' '}
                                {' '}
                                {title}
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

PersonFilms.propTypes = {
    personFilms: PropTypes.array,
};

export default PersonFilms;
