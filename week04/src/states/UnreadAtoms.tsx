import { atom } from 'recoil';

interface UnreadMessages {
    [userId: number]: number;
}

export const unreadMessagesState = atom<UnreadMessages>({
    key: 'unreadMessagesState',
    default: {},
});
