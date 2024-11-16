import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/svgs/netflix_logo.svg';
import * as styles from '@/styles/Header.css';

const Header = () => {

    return (
        <div className={styles.header}>
            <Image src={logo} alt='main logo'/>
            <p className={styles.headerItem}>TV shows</p>
            <p className={styles.headerItem}>Movies</p>
            <p className={styles.headerItem}>My List</p>
        </div>
    );
};

export default Header;