import { Movie } from "@/types/movieInterface";
import { instance } from "./instance";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchSearch = async (page: number = 1): Promise<Movie[]> => {
  const response: FetchMoviesResponse = await instance.get(
    `/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`,
  );
  return response.results;
};
