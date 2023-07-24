import { useLocation } from 'react-router';
import styles from './NotFoundPage.module.css';
import img from '../../static/404.webp';

const NotFoundPage = () => {
    const location = useLocation();

    return (
        <div>
            <img className={styles.img} src={img} alt="Not Found :(" />
            <p className={styles.text}>
                No matches for &nbsp;
                <u>
                    { location.pathname }
                </u>
            </p>
        </div>
    );
};

export default NotFoundPage;
