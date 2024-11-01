import { selector } from 'recoil';
import { currentUserState } from './UserAtoms';
import { UserData } from '../lib/UserData';

export const totalUnreadState = selector<number>({
    key: 'totalUnreadState',
    get: ({ get }) => {
        const currentUser = get(currentUserState);
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
    },
});
