import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIndicator from '../components/common/HomeIndicatior';
import TopBar from '../components/common/TopBar';
import NavBar from '../components/common/NavBar';
import Header from '../components/ChatRoomListPage/Header';
import Line from '../components/common/Line';
import ChatRoomComponent from '../components/ChatRoomListPage/ChatRoomComponent';
import { UserData } from '../lib/UserData';
import { useUser } from '../contexts/UserContext';
import { useUnread } from '../contexts/UnreadContext';

interface Message {
    senderId: number;
    text: string;
    timestamp: Date;
    read: boolean;
}

const ChatRoomListPage: React.FC = () => {
    const navigate = useNavigate();
    const { currentUser } = useUser();
    const [lastMessages, setLastMessages] = useState<{ [userId: number]: Message | null }>({});
    const [unread, setUnread] = useState<{ [userId: number]: number }>({});
    const { calculateUnread } = useUnread();

    useEffect(() => {
        //localStorage.clear();
        const newUnread: { [userId: number]: number } = {};
        const lastMessagesByUser: { [userId: number]: Message | null } = {};

        UserData.forEach(user => {
            // 각 유저별 메시지 불러오기
            if (currentUser && user.userId !== currentUser.userId) {
                // currentUser와 user 간의 공통 대화 키 생성
                const chatKey = `messages_${Math.min(currentUser.userId, user.userId)}_${Math.max(currentUser.userId, user.userId)}`;
                const savedMessages = localStorage.getItem(chatKey);
                if (savedMessages) {
                    const parsedMessages: Message[] = JSON.parse(savedMessages).map((msg: any) => ({
                        ...msg,
                        timestamp: new Date(msg.timestamp),
                    }));

                    lastMessagesByUser[user.userId] = parsedMessages.length > 0 ? parsedMessages[parsedMessages.length - 1] : null;
                    newUnread[user.userId] = parsedMessages.filter(msg => !msg.read && msg.senderId !== currentUser.userId).length;
                } else {
                    lastMessagesByUser[user.userId] = null;
                    newUnread[user.userId] = 0;
                }
            }
        });

        setLastMessages(lastMessagesByUser);
        setUnread(newUnread);
    }, [currentUser]);
    
    const handleChatRoomClick = (userId: number) => {
        if (!currentUser) return;

        // chatKey 생성
        const chatKey = `messages_${Math.min(currentUser.userId, userId)}_${Math.max(currentUser.userId, userId)}`;
        
        // 해당 채팅방의 안 읽은 메시지 개수 0으로 초기화
        setUnread(prevUnread => ({
            ...prevUnread,
            [userId]: 0
        }));

        // 로컬스토리지에서 해당 채팅방의 모든 메시지를 읽음으로 표시
        const savedMessages = localStorage.getItem(chatKey);
        if (savedMessages) {
            const messages: Message[] = (JSON.parse(savedMessages) as Message[]).map((msg: Message) =>
                msg.senderId !== currentUser.userId ? { ...msg, read: true } : msg
            );
            localStorage.setItem(chatKey, JSON.stringify(messages));
            calculateUnread();
        }

        // 클릭한 채팅방으로 이동
        navigate(`/chat/${Math.min(currentUser.userId, userId)}_${Math.max(currentUser.userId, userId)}`);
    };

    return (
        <div className='w-width h-height bg-White relative'>
            <TopBar />
            <Header />
            <Line />
            {UserData.filter(user => currentUser && user.userId !== currentUser.userId).map(user => (
                lastMessages[user.userId] && (
                    <ChatRoomComponent 
                        key={user.userId}
                        userId={user.userId}
                        lastMessage={lastMessages[user.userId] || undefined}
                        onClick={() => handleChatRoomClick(user.userId)}
                        unread={unread[user.userId] || 0}
                    />
                )
            ))}
            <div className='absolute bottom-0 w-width'>
                <NavBar />
                <HomeIndicator />
            </div>
        </div>
    );
}

export default ChatRoomListPage;
