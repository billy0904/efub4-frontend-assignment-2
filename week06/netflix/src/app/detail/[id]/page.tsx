"use client";
import NavBar from "@/components/common/navBar";
import { useParams } from "next/navigation";
import { PlayButton } from "@/components/detail/PlayButton";
import { page } from "@/styles/globalTheme.css";
import { useEffect, useState } from "react";
import { Movie } from "@/types/movieInterface";
import * as styles from "@/styles/detail/text.css";
import Image from "next/image";
import { fetchSearch } from "@/api/searchApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSearch();
        const selectedMovie = data.find((movie) => Number(id) == movie.id);
        if (selectedMovie) {
          setMovie(selectedMovie);
        } else {
          console.log("영화가 없습니다");
        }
      } catch (error) {
        console.error("검색리스트 실패", error);
      }
    };

    if (id) fetchData();
  }, [id]);

  useEffect(() => {
    if (movie?.poster_path) {
      setImageUrl(`${IMAGE_BASE_URL}${movie?.poster_path}`);
    }
  }, [movie]);

  return (
    <div className={page}>
      <Image src={imageUrl} width={375} height={415} alt="포스터" />
      <PlayButton />
      <p className={styles.title}>{movie?.title}</p>
      <p className={styles.summary}>{movie?.overview}</p>
      <NavBar />
    </div>
  );
}
