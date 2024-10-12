import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColor } from '../redux/Action';

// 타입 정의
interface HeaderStyleProps {
    textColor: string;
    backGroundColor: string;
}

interface HowtoSortProps {
    textColor: string;
}

interface GenreListProps {
    textColor: string;
}

const HeaderStyle = styled.div<HeaderStyleProps>`
    @font-face {
        font-family: 'HSSanTokki20-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405@1.0/HSSanTokki20-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'HSSanTokki20-Regular';
    font-size: 40px;
    color: ${({ textColor }) => textColor};
    display: flex;
    align-items: center;
    background-color: ${({ backGroundColor }) => backGroundColor};
    height: 80px;
    padding-left: 40px;
`;

const HowtoSort = styled.div<HowtoSortProps>`
    display: flex;
    margin-left: auto;
    margin-right: 30px;
    padding-right: 10px;

    button {
        margin-left: 20px;
        background: none;
        border: none;
        border-radius: 7px;
        padding: 10px;
        color: ${({ textColor }) => textColor};
        font-family: 'HSSanTokki20-Regular';
        font-size: 18px;
        cursor: pointer;

        &:hover {
        color: #000000;
        background-color: #00ff84;
        }
    }
`;

const GenreList = styled.div<GenreListProps>`
    position: absolute;
    top: 80px;
    right: 140px;
    background-color: none;
    color: ${({ textColor }) => textColor};
    border: 1px solid ${({ textColor }) => textColor};;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    button {
        background: none;
        border: none;
        color: ${({ textColor }) => textColor};;
        cursor: pointer;
        margin: 5px 0;
    }
`;

interface HeaderProps {
    selectGenre: (genre: string) => void;
    changeTitle: (criteria: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectGenre, changeTitle }) => {
    const [showGenres, setShowGenres] = useState(false);
    const dispatch = useDispatch();
    const backGroundColor = useSelector((state: any) => state.background.backGroundColor);
    const textColor = useSelector((state: any) => state.background.textColor);

    const sortingFunc = (criteria: string) => () => {
        changeTitle(criteria);
        setShowGenres(false);
    };

    const toggleButtonText = backGroundColor === '#000000' ? 'Light On' : 'Light Off';

    return (
        <HeaderStyle textColor={textColor} backGroundColor={backGroundColor}>
        <div>Movillie</div>
        <HowtoSort textColor={textColor}>
            <button onClick={sortingFunc('')}>기본 정렬</button>
            <button onClick={sortingFunc('rating')}>평점 순</button>
            <button onClick={sortingFunc('year')}>개봉 순</button>
            <button onClick={() => setShowGenres(!showGenres)}>장르 별</button>
            <button onClick={() => dispatch(toggleColor())}>{toggleButtonText}</button>
            {showGenres && (
            <GenreList textColor={textColor}>
                <button onClick={() => selectGenre('Drama')}>드라마</button>
                <button onClick={() => selectGenre('Horror')}>호러</button>
                <button onClick={() => selectGenre('Comedy')}>코미디</button>
                <button onClick={() => selectGenre('Romance')}>로맨스</button>
            </GenreList>
            )}
        </HowtoSort>
        </HeaderStyle>
    );
};

export default Header;
