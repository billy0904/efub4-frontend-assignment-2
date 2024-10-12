import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// 타입 정의
interface Information {
    title: string;
    large_cover_image: string;
    rating: number;
    genres: string[];
    year: number;
    runtime: number;
    language: string;
    description_full: string;
}

interface RootState {
    background: {
        textColor: string;
    };
}

interface DetailProps {
    information: Information | null;
}

const Title = styled.div<{ textColor: string }>`
    font-family: 'HSSanTokki20-Regular';
    color: ${({ textColor }) => textColor};
    font-size: 80px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Details = styled.div<{ textColor: string }>`
    font-family: 'HSSanTokki20-Regular';
    display: flex;
    flex-direction: column;
    margin: 10px;
    color: ${({ textColor }) => textColor};
`;

const String = styled.div`
    font-size: 30px;
    margin: 20px;
`;

const Story = styled.div<{ textColor: string }>`
    font-family: 'Pretendard-Regular';
    width: 500px;
    font-size: 20px;
    margin: 10px;
    text-align: center;
    color: ${({ textColor }) => textColor};
`;

const Detail: React.FC<DetailProps> = ({ information }) => {
    const textColor = useSelector((state: RootState) => state.background?.textColor || 'black');

    // information null 가딩
    if (!information) {
        return <div>정보가 없습니다.</div>;
    }

    const { title, large_cover_image: img, rating, genres, year, runtime, language, description_full: description } = information;

    return (
        <div>
            <Title textColor={textColor}>{title}</Title>
            <Container>
                <img src={img} alt={title} />
                <Details textColor={textColor}>
                    <String>평점ㅤ|ㅤ{rating}</String>
                    <String>장르ㅤ|ㅤ{genres.join(" / ")}</String>
                    <String>개봉 연도ㅤ|ㅤ{year}</String>
                    <String>상영 시간ㅤ|ㅤ{runtime} 분</String>
                    <String>언어ㅤ|ㅤ{language}</String>
                    <String>영화 소개ㅤ|ㅤ</String>
                    <Story textColor={textColor}>{description}</Story>
                </Details>
            </Container>
        </div>
    );
};

export default Detail;
