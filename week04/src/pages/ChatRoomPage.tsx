import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatBar from '../components/ChatRoomPage/ChatBar';
import Header from '../components/ChatRoomPage/Header';
import HomeIndicator from '../components/common/HomeIndicatior';
import TopBar from '../components/common/TopBar';
import MessageList from '../components/ChatRoomPage/MessageList';
import { MessageData } from '../lib/MessageData';
import { UserData } from '../lib/UserData';
import { useUser } from '../contexts/UserContext';

interface Message {
    senderId: number;
    text: string;
    timestamp: Date;
}

const ChatRoomPage: React.FC = () => {
    const { chatKey } = useParams<{ chatKey: string }>();
    const { currentUser } = useUser();
    const [messages, setMessages] = useState<Message[]>([]);

    // chatKey에서 userId 추출
    const [user1Id, user2Id] = chatKey?.split('_').map(Number) || [];
    const opponentUser = UserData.find(user => user.userId === (currentUser?.userId === user1Id ? user2Id : user1Id));
    
    // 초기 메시지 및 로컬스토리지 메시지 불러오기
    useEffect(() => {
        if (!chatKey) return;

        const isDefaultChatKey = chatKey === '0_1' || chatKey === '1_0';

        const savedMessages = localStorage.getItem(`messages_${chatKey}`);
        if (savedMessages) {
            const parsedMessages: Message[] = JSON.parse(savedMessages).map((msg: any) => ({
                ...msg,
                timestamp: new Date(msg.timestamp),
            }));
            setMessages(parsedMessages);
        } else if (isDefaultChatKey) {
            // 기본 메시지 설정
            const initialMessages: Message[] = MessageData.filter(
                msg => msg.senderId === opponentUser?.userId || msg.senderId === currentUser?.userId
            ).map(msg => ({
                ...msg,
                timestamp: new Date(msg.timestamp),
            }));
            setMessages(initialMessages);
            
            // 초기 메시지 로컬스토리지에 저장
            localStorage.setItem(`messages_${chatKey}`, JSON.stringify(initialMessages));

        }
    }, [chatKey, opponentUser, currentUser]);

    // 메시지 전송 핸들러
    const handleSendMessage = (message: string) => {
        if (!chatKey || !currentUser) return;

        const newMessage: Message = { 
            senderId: currentUser.userId, 
            text: message, 
            timestamp: new Date() 
        };
        
        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages, newMessage];
            // 로컬 스토리지에 저장
            localStorage.setItem(`messages_${chatKey}`, JSON.stringify(updatedMessages));
            
            return updatedMessages;
        });
    };

    if (!opponentUser) return <div>상대방 정보를 찾을 수 없습니다.</div>;

    return (
        <div className='w-width h-height bg-Purple/3 relative'>
            <TopBar />
            <Header opponentUser={opponentUser} />
            <MessageList messages={messages} />
            <div className='absolute bottom-0 w-width'>
                <ChatBar onSendMessage={handleSendMessage} />
                <HomeIndicator />
            </div>
        </div>
    );
}

export default ChatRoomPage;
