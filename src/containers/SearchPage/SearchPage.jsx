import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import styles from './SearchPage.module.scss';
import { getApiResource } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import UiInput from '../../components/UI/UiInput';

const SearchPage = ({ setErrorApi }) => {
    const [searchValue, setSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async (param) => {
        console.log(param);
        const res = await getApiResource(API_SEARCH + param);
        if (!res) {
            setErrorApi(true);
        }

        setErrorApi(false);

        const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImage(id);

            return {
                id,
                name,
                img,
            };
        });
        setPeople(peopleList);
    };

    useEffect(() => {
        getResponse('');
    }, []);

    const debounceGetResponse = useCallback(debounce((value) => getResponse(value), 300), []);

    const handleInputChange = (value) => {
        setSearchValue(value);
        debounceGetResponse(value);
    };

    return (
        <>
            <h1 className={styles.header__text}>Search</h1>
            <UiInput
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Put actor name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    );
};

SearchPage.propTypes = {
    setErrorApi: PropTypes.bool,
};

export default withErrorApi(SearchPage);
