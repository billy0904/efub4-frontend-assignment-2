import React, { useState, useEffect } from 'react';
import { currentTime } from '../../utils/ClockUtils';
import BatteryIcon from '../../assets/TopBar/Battery.svg';
import WifiIcon from '../../assets/TopBar/Wifi.svg';
import NetworkIcon from '../../assets/TopBar/CellularConnection.svg';

const TopBar = () => {
    const [time, setTime] = useState(currentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(currentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-topBarHeight bg-White flex items-center justify-between px-6">
            {/* 현재 시간 표시 */}
            <div className="text-white font-bold">
                {time}
            </div>
            {/* 상단바 아이콘 */}
            <div className="flex space-x-2">
                <img src={NetworkIcon} alt="Network" className="w-4 h-4" />
                <img src={WifiIcon} alt="Wi-Fi" className="w-4 h-4" />
                <img src={BatteryIcon} alt="Battery" className="w-5 h-5" />
            </div>
        </div>
    );
}

export default TopBar;
