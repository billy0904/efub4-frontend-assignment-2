import { instance } from './instance';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

interface FetchMoviesResponse {
    results: Movie[];
}

export const fetchMovies = async (): Promise<Movie[]> => {
    const response: FetchMoviesResponse = await instance.get(
        `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};

export const fetchTV = async (): Promise<Movie[]> => {
    const response: FetchMoviesResponse = await instance.get(
        `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};

export const fetchPopular = async (): Promise<Movie[]> => {
    const response: FetchMoviesResponse = await instance.get(
        `/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};

export const fetchTrending = async (): Promise<Movie[]> => {
    const response: FetchMoviesResponse = await instance.get(
        `/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};

export const fetchTopRated = async (): Promise<Movie[]> => {
    const response: FetchMoviesResponse = await instance.get(
        `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    );
    return response.results;
};