import styles from './ErrorMessage.module.css';
import UiVideo from '../UI/UiVideo';
import video from './video/fail.mp4';

const ErrorMessage = () => (
    <>
        <p className={styles.text}>Oops... :(( </p>
        <UiVideo
            src={video}
            playbackRate={1}
            classes={styles.video}
        />
    </>
);

export default ErrorMessage;
