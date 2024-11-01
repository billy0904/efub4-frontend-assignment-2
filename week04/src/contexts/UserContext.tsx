import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserData } from '../lib/UserData';

interface User {
    userId: number;
    userName: string;
    phoneNumber: string;
    email: string;
    sns: string;
}

interface UserContextType {
    currentUser: User | null;
    opponentUser: User | null;
    toggleUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    // 로컬스토리지에서 currentUser 가져오기
    const storedUser = localStorage.getItem('currentUser');
    const initialUser = storedUser ? JSON.parse(storedUser) : UserData.find(user => user.userId === 0) || null;

    const [currentUser, setCurrentUser] = useState<User | null>(initialUser);

    // currentUser가 변경될 때마다 로컬스토리지에 저장
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }, [currentUser]);

    // currentUser의 userId에 따라 opponentUser 설정
    const opponentUser: User | null = currentUser?.userId === 0 
        ? UserData.find(user => user.userId === 1) || null
        : UserData.find(user => user.userId === 0) || null;

    const toggleUser = () => {
        const newUser = currentUser?.userId === 0 
            ? UserData.find(user => user.userId === 1)
            : UserData.find(user => user.userId === 0);
        if (newUser) setCurrentUser(newUser);
    };

    return (
        <UserContext.Provider value={{ currentUser, opponentUser, toggleUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("error");
    }
    return context;
};
