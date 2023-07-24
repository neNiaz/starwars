import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PersonPhoto.module.css';
import { removePersonFromFavourite, setPersonToFavourite } from '../../store/actions';
import iconFavourite from './img/fav.svg';
import iconNonFavourite from './img/nonfav.svg';

const PersonPhoto = ({
    personId, personFavourite, setPersonFavourite, personPhoto, personName,
}) => {
    const dispatch = useDispatch();

    const dispatchFavouritePeople = () => {
        if (personFavourite) {
            dispatch(removePersonFromFavourite(personId));
            setPersonFavourite(false);
        } else {
            dispatch(setPersonToFavourite({
                [personId]: {
                    name: personName,
                    img: personPhoto,
                },
            }));
            setPersonFavourite(true);
        }
    };

    return (
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName} />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img
                onClick={dispatchFavouritePeople}
                className={styles.favourite}
                src={personFavourite ? iconFavourite : iconNonFavourite}
                alt="Add to fav"
            />
        </div>
    );
};

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personFavourite: PropTypes.bool,
    setPersonFavourite: PropTypes.func,
    personName: PropTypes.string,
};

export default PersonPhoto;
