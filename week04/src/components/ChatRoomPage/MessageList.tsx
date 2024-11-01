import React, { useEffect, useRef, useState } from 'react';
import profileIcon from "../../assets/ChatRoom/profile.svg";
import { formatTime } from '../../utils/ClockUtils';
import { useUser } from '../../contexts/UserContext';
import heartIcon from "../../assets/Reactions/heart.svg";
import smileIcon from "../../assets/Reactions/smile.svg";
import ohIcon from "../../assets/Reactions/oh.svg";
import tearIcon from "../../assets/Reactions/tear.svg";
import angerIcon from "../../assets/Reactions/angry.svg";
import thumbIcon from "../../assets/Reactions/thumb.svg";
import plusIcon from "../../assets/Reactions/plus.svg";

interface Message {
    senderId: number;
    text: string;
    timestamp: Date;
    emoji?: string;
}

interface MessageListProps {
    messages: Message[];
}

// 메시지 그룹화 함수
const groupMessages = (messages: Message[]) => {
    return messages.reduce((arr, message, index) => {
        const timeKey = formatTime(message.timestamp);
        const prevMessage = messages[index - 1];
        const isSameSender = prevMessage && prevMessage?.senderId === message.senderId;
        const isSameMinute = prevMessage && formatTime(prevMessage.timestamp) === timeKey;

        if (!isSameSender || !isSameMinute) {
            arr.push({ timeKey, senderId: message.senderId, messages: [message] });
        } else {
            arr[arr.length - 1].messages.push(message);
        }

        return arr;
    }, [] as { timeKey: string; senderId: number; messages: Message[] }[]);
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    const { currentUser, opponentUser } = useUser();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [reactions, setReactions] = useState<{ [key: number]: string | undefined }>({});
    const [showReactions, setShowReactions] = useState<number | null>(null);

    // 렌더링 시 로컬스토리지에서 리액션 데이터 가져오기
    useEffect(() => {
        const storedReactions = localStorage.getItem('messageReactions');
        if (storedReactions) {
            setReactions(JSON.parse(storedReactions));
        }
    }, []);

    // 로컬스토리지에 리액션 저장
    const saveReactionsToLocalStorage = (updatedReactions: { [key: number]: string | undefined }) => {
        localStorage.setItem('messageReactions', JSON.stringify(updatedReactions));
    };


    const handleDoubleClick = (index: number, event: React.MouseEvent) => {
        event.preventDefault(); // 드래그 방지
        setShowReactions(index === showReactions ? null : index);
    };

    const handleSelectEmoji = (index: number, emoji: string) => {
        const currentReaction = reactions[index];
        const updatedReactions = { ...reactions, [index]: currentReaction === emoji ? undefined : emoji };
        setReactions(updatedReactions);
        saveReactionsToLocalStorage(updatedReactions);
        setShowReactions(null);
    };

    const groupedMessages = groupMessages(messages);

    let lastTimeDisplayed: string | null = null;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="flex flex-col w-full h-messageAreaHeight font-['Pretendard'] px-4 py-2 overflow-y-auto scrollbar-hide">
            {groupedMessages.map((group, groupIndex) => {
                const shouldDisplayTime = group.timeKey !== lastTimeDisplayed;
                lastTimeDisplayed = group.timeKey;

                return (
                    <div key={groupIndex} className="mb-4">
                        {shouldDisplayTime && (
                            <div className="text-center text-White text-[12px] font-['Pretendard'] my-[10px]">
                                {group.timeKey}
                            </div>
                        )}

{group.messages.map((message, idx) => {
    const messageIndex = groupIndex * 100 + idx;
    const isCurrentUser = message.senderId === currentUser?.userId;

    return (
        <div
            key={idx}
            className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-[4px]`}
            onDoubleClick={(e) => handleDoubleClick(messageIndex, e)}
            style={{ userSelect: 'none'}}
        >
            {/* 상대방 메시지 렌더링 */}
            {!isCurrentUser && (
                <div className="flex flex-col items-start">
                    {idx === 0 && (
                        <div className="flex items-center max-w-[328px] mb-[6px]">
                            <img src={profileIcon} alt="Profile" className="mr-2" />
                            <p className="text-Gray/2 text-[16px] font-['Pretendard']">
                                {opponentUser?.userName || '(알 수 없음)'}
                            </p>
                        </div>
                    )}
                    <div className="relative max-w-full">
                        <p className="px-[14px] py-[10px] rounded-[20px] break-all my-1 bg-White text-Gray/2 cursor-pointer">
                            {message.text}
                        </p>
                        {reactions[messageIndex] && (
                            <div className='flex justify-end'>
                                <div className="flex w-[30px] h-[22px] justify-center items-center rounded-[50px] bg-Purple/1 py-[3px] px-[5px] mt-[-13px]">
                                    <img
                                        src={reactions[messageIndex]}
                                        alt="Selected Reaction"
                                        className="w-[16px]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    {/* 리액션 바 */}
                    {showReactions === messageIndex && (
                        <div className="flex space-x-[10px] mt-[8px] bg-White rounded-[50px] px-[13px] py-[8px]">
                            {[heartIcon, smileIcon, ohIcon, tearIcon, angerIcon, thumbIcon].map((emoji, i) => (
                                <span
                                    key={i}
                                    className="text-[20px] cursor-pointer"
                                    onClick={() => handleSelectEmoji(messageIndex, emoji)}
                                >
                                    <img src={emoji} alt="Reaction" />
                                </span>
                            ))}
                            <img src={plusIcon} alt="AddReaction" />
                        </div>
                    )}
                </div>
            )}

            {/* 본인 메시지 렌더링 */}
            {isCurrentUser && (
                <div className="relative flex flex-col">
                    <p className="px-[14px] py-[10px] rounded-[20px] max-w-[328px] break-all my-1 bg-Purple/1 text-White">
                        {message.text}
                    </p>
                    {reactions[messageIndex] && (
                            <div className='flex justify-start'>
                                <div className="flex w-[30px] h-[22px] justify-center items-center rounded-[50px] bg-White py-[3px] px-[5px] mt-[-13px]">
                                    <img
                                        src={reactions[messageIndex]}
                                        alt="Selected Reaction"
                                        className="w-[16px]"
                                    />
                                </div>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
})}
                    </div>
                );
            })}
            <div ref={scrollRef} />
        </div>
    );
};

export default MessageList;