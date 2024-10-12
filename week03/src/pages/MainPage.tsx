import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Header from "../components/Header";
import axios from "axios";
import { useSelector } from 'react-redux';

// 타입 정의
interface ContainerProps {
    backGroundColor: string;
}

interface TitleProps {
    textColor: string;
}

interface StyledLinkProps {
    movieTitleColor: string;
}

interface MainPageProps {
    changeTitle: (criteria: string) => void;
}

interface MovieData {
    id: number;
    title: string;
    medium_cover_image: string;
}


const Title = styled.div<TitleProps>`
    font-family: 'HSSanTokki20-Regular';
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 40px;
    color: ${({ textColor }) => textColor};
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div<ContainerProps>`
    background-color: ${({ backGroundColor }) => backGroundColor};
`;

const MovieList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledLink = styled(Link)<StyledLinkProps>`
    color: ${({ movieTitleColor }) => movieTitleColor};
    text-decoration-line: none;
`;

const MainPage: React.FC<MainPageProps> = () => {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const [sort, setSort] = useState("");
    const [genre, setGenre] = useState("");
    const [title, setTitle] = useState("영화 목록");
    
    const backGroundColor = useSelector((state: any) => state.background.backGroundColor);
    const textColor = useSelector((state: any) => state.background.textColor);
    const movieTitleColor = useSelector((state: any) => state.background.movieTitleColor);

    const getMovies = async (sort: string, genre: string) => {
        try {
            const res = await axios.get(
                `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}${genre ? `&genre=${genre}` : ""}`
            );
            setMovies(res.data.data.movies);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getMovies(sort, genre);
    }, [sort, genre]);

    const changeTitle = (criteria: string) => {
        const titles: { [key: string]: string } = {
            "": "영화 목록",
            rating: "평점 순",
            year: "개봉 순",
            genre: "장르별",
        };
        const newTitle = titles[criteria] || "";
        setTitle(newTitle);
        setSort(criteria);
    };

    const selectGenre = (selectedGenre: string) => {
        setGenre(selectedGenre);
    };

    return (
        <Container backGroundColor={backGroundColor}>
            <Header changeTitle={changeTitle} selectGenre={selectGenre} />
            <MainContainer>
                <Title textColor={textColor}>{title}</Title>
                <MovieList>
                    {movies.map((movie) => (
                        <StyledLink key={movie.id} to={`/detail/${movie.id}`} movieTitleColor={movieTitleColor}>
                            <Movie title={movie.title} image={movie.medium_cover_image} />
                        </StyledLink>
                    ))}
                </MovieList>
            </MainContainer>
        </Container>
    );
};

export default MainPage;