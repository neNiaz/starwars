import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import styles from './UiVideo.module.scss';

const UiVideo = ({ src, playbackRate = 1.0, classes }) => {
    // eslint-disable-next-line jsx-a11y/media-has-caption
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);

    return (
        <video
            /* eslint-disable-next-line react/no-unknown-property */
            playbackRate={playbackRate}
            loop
            autoPlay
            muted
            className={classNames(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src} />
        </video>
    );
};

UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
};

export default UiVideo;
