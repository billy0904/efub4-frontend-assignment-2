import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileIcon from "../../assets/ChatRoom/profile.svg";
import foldIcon from "../../assets/FriendList/up_arrow.svg";
import unfoldIcon from "../../assets/FriendList/down_arrow.svg";
import { UserData } from '../../lib/UserData';
import { useUser } from '../../contexts/UserContext';

const FriendList: React.FC = () => {
    const [isFolded, setIsFolded] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useUser();

    const toggleFold = () => {
        setIsFolded(!isFolded);
    };

    const handleProfileClick = (userId: number) => {
        if (!currentUser) return;

        // chatKey 생성
        const chatKey = `${Math.min(currentUser.userId, userId)}_${Math.max(currentUser.userId, userId)}`;

        // 클릭한 채팅방으로 이동
        navigate(`/chat/${chatKey}`);
    };

    return (
        <div>
            <div className="w-full h-[32px] bg-White flex items-center justify-between px-[16px] py-[4px]">
                <p className="text-Gray/4 text-[12px] font-['Pretendard'] font-medium">친구</p>
                <img
                    src={isFolded ? unfoldIcon : foldIcon}
                    alt='fold'
                    className='cursor-pointer'
                    onClick={toggleFold}
                />
            </div>
            {!isFolded && (
                <div>
                    {UserData.filter(user => user.userId !== currentUser?.userId).map((user) => (
                        <div
                            key={user.userId}
                            className="flex justify-start items-center px-[16px] py-[12px] cursor-pointer"
                            onClick={() => handleProfileClick(user.userId)}
                        >
                            <img src={profileIcon} alt='profile' className='w-[44px]'/>
                            <p className="text-Gray/2 text-[16px] font-['Pretendard'] font-medium leading-[150%] ml-[7px]">
                                {user.userName}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FriendList;