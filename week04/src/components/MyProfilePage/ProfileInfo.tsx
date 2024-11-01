import arrowIcon from "../../assets/MyProfile/right_arrow.svg";

interface ProfileInfoProps {
    title: string;
    content: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ title, content }) => {

    return (
        <div className="w-full h-[55px] bg-White flex items-center justify-between px-[16px] py-[12px]">
            <div className="flex flex-col justify-center items-start">
                <p className="text-Gray/4 text-[12px] font-['Pretendard'] font-medium leading-[100%]">
                    {title}
                </p>
                <p className="text-Gray/2 text-[14px] font-['Pretendard'] font-medium leading-[100%] mt-[5px]">
                    {content}
                </p>
            </div>
            <img src={arrowIcon} alt="edit"/>
        </div>
    );
}

export default ProfileInfo;