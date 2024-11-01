import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useUser } from './UserContext';
import { UserData } from '../lib/UserData';

interface UnreadContextType {
    totalUnread: number;
    calculateUnread: () => void;
}

const UnreadContext = createContext<UnreadContextType | undefined>(undefined);

export const UnreadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { currentUser } = useUser();
    const [totalUnread, setTotalUnread] = useState(0);

    const calculateUnread = () => {
        if (!currentUser) return;
        let cnt = 0;
        UserData.forEach(user => {
            if (user.userId !== currentUser.userId) {
                const chatKey = `messages_${Math.min(currentUser.userId, user.userId)}_${Math.max(currentUser.userId, user.userId)}`;
                const savedMessages = localStorage.getItem(chatKey);
                if (savedMessages) {
                    const parsedMessages = JSON.parse(savedMessages);
                    cnt += parsedMessages.filter((msg: any) => !msg.read && msg.senderId !== currentUser.userId).length;
                }
            }
        });
        setTotalUnread(cnt);
    };

    useEffect(() => {
        calculateUnread();
    }, [currentUser]);

    return (
        <UnreadContext.Provider value={{ totalUnread, calculateUnread }}>
            {children}
        </UnreadContext.Provider>
    );
};

export const useUnread = (): UnreadContextType => {
    const context = useContext(UnreadContext);
    if (!context) {
        throw new Error("error");
    }
    return context;
};