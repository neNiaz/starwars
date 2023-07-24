import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon from './img/bookmark.svg';
import styles from './Favourite.module.css';

const Favourite = () => {
    const [count, setCount] = useState(0);
    const storeData = useSelector((state) => state.favouriteReducer);

    useEffect(() => {
        const { length } = Object.keys(storeData);
        // eslint-disable-next-line no-unused-expressions
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });

    return (
        <div className={styles.container}>
            <Link to="/favourites">
                <img className={styles.icon} src={icon} alt="favs" />
                <span className={styles.counter}>{count}</span>
            </Link>
        </div>
    );
};

export default Favourite;
