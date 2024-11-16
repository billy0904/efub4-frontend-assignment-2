"use client";

import { useEffect, useState } from 'react';
import { fetchTopRated } from '@/api/MovieList';
import * as styles from '@/styles/MovieList.css';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

const TopRatedList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);


    useEffect(() => {
        const loadMovies = async () => {
            try {
                const movieList = await fetchTopRated();
                setMovies(movieList);
            } catch (error) {
                console.error("영화 리스트 로드 실패", error);
            }
        };

        loadMovies();
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.title}>Top Rated</p>
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

export default TopRatedList;