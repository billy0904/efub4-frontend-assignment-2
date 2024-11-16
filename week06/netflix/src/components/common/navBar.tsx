"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import home from '../../../public/svgs/navbar/home_icon.svg';
import search from '../../../public/svgs/navbar/search_icon.svg';
import coming from '../../../public/svgs/navbar/coming_icon.svg';
import downloads from '../../../public/svgs/navbar/downloads_icon.svg';
import more from '../../../public/svgs/navbar/more_icon.svg';
import * as styles from '@/styles/Navbar.css';

const NavBar: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('home');

    const navItems = [
        { id: 'home', label: 'Home', icon: home, href: '/home' },
        { id: 'search', label: 'Search', icon: search, href: '/search' },
        { id: 'coming', label: 'Coming Soon', icon: coming, href: '/coming' },
        { id: 'downloads', label: 'Downloads', icon: downloads, href: '/downloads' },
        { id: 'more', label: 'More', icon: more, href: '/more' },
    ];

    return (
        <nav className={styles.navBar}>
            {navItems.map((item) => (
                <Link key={item.id} href={item.href} onClick={() => setActiveTab(item.id)}>
                    <div
                        className={`${styles.navItem} ${
                            activeTab === item.id ? styles.activeNavItem : ''
                        }`}
                    >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            className={`${styles.icon} ${
                                activeTab === item.id ? styles.activeIcon : ''
                            }`}
                        />
                        <span>{item.label}</span>
                    </div>
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;