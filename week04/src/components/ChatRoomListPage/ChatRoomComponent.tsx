import React from 'react';
import profileIcon from "../../assets/ChatRoom/profile.svg";
import { UserData } from '../../lib/UserData';
import { formatTimeForChatList } from '../../utils/ClockUtils';

interface LastMessage {
    text: string;
    timestamp: Date;
}

interface ComponentProps {
    userId: number;
    lastMessage?: LastMessage;
    onClick: () => void;
    unread: number;
}

const ChatRoomComponent: React.FC<ComponentProps> = ({ userId, lastMessage, onClick, unread }) => {
    const user = UserData.find(user => user.userId === userId);

    return (
        <div onClick={onClick} className='w-full h-ChatRoomComponentHeight bg-White p-[16px] flex items-center cursor-pointer'>
            <img src={profileIcon} className='w-[44px]'></img>
            <div className='flex flex-col justify-center w-[203px] h-[53px] ml-[16px]'>
                <span className="text-Gray/2 text-base font-medium font-['Pretendard'] h-[16px] justify-self-stretch align-middle leading-[100%] mb-[5px]">{user?.userName || '(알 수 없음)'}</span>
                <span className="text-Gray/3 text-xs font-medium font-['Pretendard'] leading-[130%] line-clamp-2">{lastMessage?.text}</span>
            </div>
            <div className='flex flex-col justify-start items-end w-[80px] h-[33px]'>
                <span className="text-Gray/3 text-[9px] font-medium font-['Pretendard']">{lastMessage ? formatTimeForChatList(lastMessage.timestamp) : ''}</span>
                {unread > 0 && (
                    <span className="text-White text-xs font-medium font-['Pretendard'] w-[19px] h-[19px] py-[2.5px] px-[5.5px] bg-Purple/2 rounded-[100px] mt-[5px] flex items-center justify-center">
                        {unread}
                    </span>
                )}
            </div>
        </div>
    );
}

export default ChatRoomComponent;