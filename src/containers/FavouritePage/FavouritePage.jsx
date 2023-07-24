import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList';
import styles from './FavouritePage.module.css';

const FavouritePage = () => {
    const [people, setPeople] = useState([]);
    const storeData = useSelector((state) => state.favouriteReducer);
    useEffect(() => {
        const arr = Object.entries(storeData);
        if (arr.length) {
            const res = arr.map((item) => ({
                id: item[0],
                ...item[1],
            }));
            setPeople(res);
        }
    }, []);

    return (
        <div>
            {
                people.length
                    ? <PeopleList people={people} />
                    : <h2 className={styles.cart}>Empty cart...</h2>
            }
        </div>
    );
};

export default FavouritePage;
