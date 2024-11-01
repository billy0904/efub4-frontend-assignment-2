import React from 'react';
import searchIcon from "../../assets/ChatRoom/search.svg";
import addIcon from "../../assets/MyProfile/add_friend.svg";
import musicIcon from "../../assets/MyProfile/music.svg";
import settingIcon from "../../assets/ChatRoomList/setting_icon.svg";

const Header = () => {
    return (
        <div className="w-full h-headerHeight bg-White flex items-center justify-between px-[16px] py-[12px]">
            <div className="flex items-center">
                <p className="text-Gray/2 text-2xl font-['Pretendard'] font-semibold cursor-pointer">
                    친구
                </p>
            </div>

            <div className="flex items-center space-x-[16px] ml-[80px]">
                <img src={searchIcon} alt="Search"/>
                <img src={addIcon} alt="AddFriend"/>
                <img src={musicIcon} alt="Music"/>
                <img src={settingIcon} alt="Setting"/>

            </div>
        </div>
    );
}

export default Header;