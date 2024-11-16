"use client";

import { useEffect, useState } from 'react';
import { fetchTrending } from '@/api/MovieList';
import * as styles from '@/styles/MovieList.css';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

const TrendingList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);


    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movieList = await fetchTrending();
                setMovies(movieList);
            } catch (error) {
                console.error("영화 리스트 로드 실패", error);
            }
        };

        loadMovies();
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.title}>Trending Now</p>
            <div className={styles.contents}>
            {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className={styles.movieItem}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                className={styles.squarePoster}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>
        </div>
    );
};

export default TrendingList;