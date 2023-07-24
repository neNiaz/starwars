import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { changeHTTP, getApiResource } from '../../utils/network';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeopleNavigation';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');
    const getResource = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const image = getPeopleImage(id);

                return { id, name, image };
            });

            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
