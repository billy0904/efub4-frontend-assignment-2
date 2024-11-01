import { useNavigate } from 'react-router-dom';
import profileIcon from "../../assets/MyProfile/my_profile.svg";
import multiProfileIcon from "../../assets/MyProfile/multiProfile.svg";
import { useUser } from '../../contexts/UserContext';

const UserProfile = () => {
    const navigate = useNavigate();
    const { currentUser, toggleUser } = useUser();

    const handleProfileClick = () => {
        navigate('/my');
    };

    return (
        <div 
            className="w-full h-profileTitleHeight bg-White flex items-center justify-between px-[16px] py-[12px] cursor-pointer"
            onClick={handleProfileClick}
        >
            <div className="flex justify-center items-center">
                <img src={profileIcon} alt="profileImg"/>
                <p className="text-Gray/2 text-[18px] font-['Pretendard'] font-semibold ml-[9px]">
                    {currentUser?.userName}
                </p>
            </div>
            <img 
                src={multiProfileIcon} 
                alt="setMultiProfile"
                onClick={(e) => {
                    e.stopPropagation(); // 부모 클릭 이벤트 방지
                    toggleUser(); // 전역 상태에서 유저 토글
                }}
                className='cursor-pointer'
            />
        </div>
    );
}

export default UserProfile;