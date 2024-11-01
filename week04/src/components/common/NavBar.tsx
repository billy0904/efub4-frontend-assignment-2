import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as FriendIcon } from "../../assets/ChatRoomList/friend_icon.svg";
import { ReactComponent as ChatIcon } from "../../assets/ChatRoomList/chatting_icon.svg";
import { ReactComponent as OpenedChatIcon } from "../../assets/ChatRoomList/openedChat_icon.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/ChatRoomList/shopping_icon.svg";
import { ReactComponent as MoreIcon } from "../../assets/ChatRoomList/more_icon.svg";
import { useUnread } from '../../contexts/UnreadContext';

const NavBar: React.FC = () => {
    const basicBtnStyle = "text-[9px] font-['Pretendard'] flex flex-col items-center cursor-pointer";
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const { totalUnread } = useUnread();

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);
    
    const onBtnClick = (path: string) => {
        setActivePath(path);
        navigate(path);
    }

    const getBtnStyle = (path: string) => {
        return activePath === path 
            ? `text-Purple/1 ${basicBtnStyle}` 
            : `text-Gray/2 ${basicBtnStyle}`;
    }

    const getIconStyle = (path: string) => {
        return activePath === path ? "#AB78FF" : "#666666";
    }

    return (
        <div 
            className="w-full h-navBarHeight bg-White flex items-center justify-between p-[16px]"
            style={{ boxShadow: "0px -4px 8px 0px rgba(0, 0, 0, 0.08)" }}
        >
            <div onClick={() => onBtnClick("/friends")} className={getBtnStyle("/friends")} style={{color: getIconStyle("/friends")}}>
                <FriendIcon /> 친구
            </div>
            <div onClick={() => onBtnClick("/chatlist")} className={`${getBtnStyle("/chatlist")} relative`} style={{color: getIconStyle("/chatlist")}}>
                <ChatIcon />
                {totalUnread > 0 && (
                    <div className="absolute top-[1px] right-[-14px] text-[9px] font-medium font-['Pretendard'] text-White bg-Purple/2 rounded-[50px] w-5 h-[13px] flex items-center justify-center">
                        {totalUnread}
                    </div>
                )}
                채팅
            </div>
            <div onClick={() => onBtnClick("/openedChat")} className={getBtnStyle("/openedChat")} style={{color: getIconStyle("/openedChat")}}>
                <OpenedChatIcon /> 오픈채팅
            </div>
            <div onClick={() => onBtnClick("/shopping")} className={getBtnStyle("/shopping")} style={{color: getIconStyle("/shopping")}}>
                <ShoppingIcon /> 쇼핑
            </div>
            <div onClick={() => onBtnClick("/more")} className={getBtnStyle("/more")} style={{color: getIconStyle("/more")}}>
                <MoreIcon /> 더보기
            </div>
        </div>
    );
}

export default NavBar;
