import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from "../../assets/ChatRoom/back.svg";
import searchIcon from "../../assets/ChatRoom/search.svg";
import menuIcon from "../../assets/ChatRoom/menu.svg";

interface HeaderProps {
    opponentUser: { userId: number, userName: string };
}

const Header: React.FC<HeaderProps> = ({ opponentUser }) => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/chatlist');
    }
    return (
        <div className="w-full h-headerHeight bg-White flex items-center justify-between pl-[9px]">
            <div className="flex items-center space-x-[2px]">
                <img src={backIcon} onClick={handleBackClick} alt="GoBack" className='cursor-pointer'/>
                <p className="text-Gray/2 text-2xl font-['Pretendard'] font-semibold cursor-pointer">
                    {opponentUser.userName}
                </p>
            </div>

            <div className="flex items-center space-x-[16px] pr-[16px] ml-[80px]">
                <img src={searchIcon} alt="Search"/>
                <img src={menuIcon} alt="Menu"/>
            </div>
        </div>
    );
}

export default Header;