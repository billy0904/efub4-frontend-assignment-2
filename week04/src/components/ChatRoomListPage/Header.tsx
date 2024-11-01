import searchIcon from "../../assets/ChatRoom/search.svg";
import menuIcon from "../../assets/ChatRoom/menu.svg";
import newChatIcon from "../../assets/ChatRoomList/newChat_icon.svg";
import settingIcon from "../../assets/ChatRoomList/setting_icon.svg";

const Header = () => {

    return (
        <div className="w-full h-headerHeight bg-White flex items-center justify-between">
            <div className="flex items-center space-x-[2px]">
                <p className="text-Gray/2 text-2xl font-['Pretendard'] font-semibold px-[16px]">
                    채팅
                </p>
            </div>

            <div className="flex items-center space-x-[16px] pr-[16px] ml-[80px]">
                <img src={searchIcon} alt="Search"/>
                <img src={newChatIcon} alt="NewChat"/>
                <img src={settingIcon} alt="Setting"/>
            </div>
        </div>
    );
}

export default Header;