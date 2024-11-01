import { atom } from 'recoil';
import { UserData } from '../lib/UserData';
import { User } from './UserAtoms';

interface UnreadMessages {
    [userId: number]: number;
}

export const unreadMessagesState = atom<UnreadMessages>({
    key: 'unreadMessagesState',
    default: {},
});

export const totalUnreadState = atom<number>({
    key: 'totalUnreadState',
    default: 0,
});

export const calculateTotalUnread = (currentUser: User | null) => {
    if (!currentUser) return 0;

    let totalUnread = 0;
    UserData.forEach(user => {
        if (user.userId !== currentUser.userId) {
            const chatKey = `messages_${Math.min(currentUser.userId, user.userId)}_${Math.max(currentUser.userId, user.userId)}`;
            const savedMessages = localStorage.getItem(chatKey);
            if (savedMessages) {
                const parsedMessages = JSON.parse(savedMessages);
                totalUnread += parsedMessages.filter((msg: any) => !msg.read && msg.senderId !== currentUser.userId).length;
            }
        }
    });
    return totalUnread;
};