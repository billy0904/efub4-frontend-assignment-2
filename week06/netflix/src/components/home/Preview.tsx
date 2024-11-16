"use client";

import { useEffect, useState } from 'react';
import { fetchTV } from '@/api/MovieList';
import * as styles from '@/styles/Preview.css';

interface TV {
    id: number;
    title: string;
    poster_path: string;
}

const Preview = () => {
    const [TV, setTV] = useState<TV[]>([]);

    useEffect(() => {
        const loadTV = async () => {
            try {
                const tvList = await fetchTV();
                setTV(tvList);
            } catch (error) {
                console.error("TV 리스트 로드 실패", error);
            }
        };

        loadTV();
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.title}>Previews</p>
            <div className={styles.contents}>
                {TV.length > 0 ? (
                        TV.map((tv) => (
                            <div key={tv.id} className={styles.tvItem}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                                    className={styles.roundPoster}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading TVs...</p>
                    )}
            </div>
        </div>
    );
};

export default Preview;