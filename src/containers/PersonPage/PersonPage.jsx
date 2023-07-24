import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import styles from './PersonPage.module.css';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonInfo from '../../components/PersonInfo';
import PersonPhoto from '../../components/PersonPhoto';
import PersonLinkBack from '../../components/PeoplePage/PersonLinkBack';
import UiLoading from '../../components/UI/UiLoading/UiLoading';
import { setPersonToFavourite } from '../../store/actions';

const PersonFilms = React.lazy(() => import('../../components/PeoplePage/PersonFilms'));

const PersonPage = ({ match, setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavourite, setPersonFavourite] = useState(null);
    const idPerson = useParams().id;

    const storeData = useSelector((state) => state.favouriteReducer);

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${idPerson}/`);
            if (!res) {
                setErrorApi(true);
            }

            // eslint-disable-next-line no-unused-expressions
            storeData[idPerson] ? setPersonFavourite(true) : setPersonToFavourite(false);

            setPersonId(idPerson);

            setPersonName(res.name);
            setPersonPhoto(getPeopleImage(idPerson));
            setPersonInfo([
                { title: 'Height', data: res.height },
                { title: 'Mass', data: res.mass },
                { title: 'Hair Color', data: res.hair_color },
                { title: 'Skin Color', data: res.skin_color },
                { title: 'Eye color', data: res.eye_color },
                { title: 'Birth Date', data: res.eye_color },
                { title: 'Gender', data: res.gender },
            ]);

            // eslint-disable-next-line no-unused-expressions
            res.films && setPersonFilms(res.films);

            setErrorApi(false);
        })();
    }, []);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personId={personId}
                        setPersonFavourite={setPersonFavourite}
                        personFavourite={personFavourite}
                        personPhoto={personPhoto}
                        personName={personName}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms
                        && (
                            <Suspense fallback={<UiLoading theme="white" />}>
                                <PersonFilms personFilms={personFilms} />
                            </Suspense>
                        )}
                </div>
            </div>
        </>
    );
};

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
