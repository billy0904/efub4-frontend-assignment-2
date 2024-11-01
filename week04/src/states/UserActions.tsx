import { useRecoilState } from 'recoil';
import { UserData } from '../lib/UserData';
import { currentUserState } from './UserAtoms';

export const useToggleUser = () => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

    const toggleUser = () => {
        const newUser = currentUser?.userId === 0
            ? UserData.find(user => user.userId === 1)
            : UserData.find(user => user.userId === 0);
        if (newUser) setCurrentUser(newUser);
    };

    return toggleUser;
};
