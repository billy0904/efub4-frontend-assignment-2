import Image from 'next/image';
import myList from '../../../public/svgs/home/myListIcon.svg';
import info from '../../../public/svgs/home/infoIcon.svg';
import play from '../../../public/svgs/home/play.svg';
import * as styles from '@/styles/PlayBar.css';

const PlayBar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.element}>
                    <Image src={myList} alt='My List'/>
                    <p className={styles.text}>My List</p>
                </div>
                <button type="button" className={styles.button}>
                    <Image src={play} alt='playBtn'/>
                    Play
                </button>
                <div className={styles.element}>
                    <Image src={info} alt='Information'/>
                    <p className={styles.text}>Info</p>
                </div>
            </div>
        </div>
    );
};

export default PlayBar;