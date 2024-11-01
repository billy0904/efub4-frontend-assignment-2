import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from "../../assets/ChatRoom/back.svg";
import searchIcon from "../../assets/ChatRoom/search.svg";
import addIcon from "../../assets/MyProfile/add_friend.svg";
import musicIcon from "../../assets/MyProfile/music.svg";
import settingIcon from "../../assets/ChatRoomList/setting_icon.svg";

const Header = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }
    return (
        <div className="w-full h-headerHeight bg-White flex items-center justify-between pl-[9px]">
            <div className="flex items-center space-x-[2px]">
                <img src={backIcon} onClick={handleBackClick} alt="GoBack" className='cursor-pointer'/>
                <p className="text-Gray/2 text-2xl font-['Pretendard'] font-semibold cursor-pointer">
                    프로필
                </p>
            </div>

            <div className="flex items-center space-x-[16px] pr-[16px] ml-[80px]">
                <img src={searchIcon} alt="Search"/>
                <img src={addIcon} alt="AddFriend"/>
                <img src={musicIcon} alt="Music"/>
                <img src={settingIcon} alt="Setting"/>

            </div>
        </div>
    );
}

export default Header;