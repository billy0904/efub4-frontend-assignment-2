import { atom, selector } from 'recoil';
import { UserData } from '../lib/UserData';

export interface User {
    userId: number;
    userName: string;
    phoneNumber: string;
    email: string;
    sns: string;
}

// 로컬스토리지에서 currentUser 가져오기
const storedUser = localStorage.getItem('currentUser');
const initialUser: User | null = storedUser ? JSON.parse(storedUser) : UserData.find(user => user.userId === 0) || null;

// currentUser atom
export const currentUserState = atom<User | null>({
    key: 'currentUserState',
    default: initialUser,
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(newUser => {
                if (newUser) {
                    localStorage.setItem('currentUser', JSON.stringify(newUser));
                }
            });
        },
    ],
});

// opponentUser selector
export const opponentUserState = selector<User | null>({
    key: 'opponentUserState',
    get: ({ get }) => {
        const currentUser = get(currentUserState);
        return currentUser?.userId === 0
            ? UserData.find(user => user.userId === 1) || null
            : UserData.find(user => user.userId === 0) || null;
    },
});