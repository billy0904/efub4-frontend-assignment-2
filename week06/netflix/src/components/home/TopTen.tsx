"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import topTenIcon from '../../../public/svgs/home/TopTenIcon.svg';
import { fetchTopRated } from '@/api/MovieList';
import * as styles from '@/styles/TopTen.css';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    rank: number;
}

const TopTen = () => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const loadRandomMovie = async () => {
            try {
                const movies = await fetchTopRated();
                if (movies.length > 0) {
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    setMovie({ ...movies[randomIndex], rank: randomIndex + 1 });
                }
            } catch (error) {
                console.error('영화 정보 로드 실패:', error);
            }
        };

        loadRandomMovie();
        }, []);

    return (
        <div className={styles.container}>
            {movie ? (
            <>
                <div className={styles.poster}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={375}
                        height={415}
                    />
                </div>
                <div className={styles.topTenContainer}>
                    <Image src={topTenIcon} alt="Top ten" />
                    <p className={styles.text}>#{movie.rank} in Korea Today</p>
                </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TopTen;