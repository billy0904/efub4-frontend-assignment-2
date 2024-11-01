import React, { useState, useEffect } from 'react';
import HomeIndicator from '../components/common/HomeIndicatior';
import TopBar from '../components/common/TopBar';
import NavBar from '../components/common/NavBar';
import Header from '../components/FriendListPage/Header';
import UserProfile from '../components/MyProfilePage/UserProfile';
import UpdatedProfile from '../components/FriendListPage/UpdatedProfile';
import Peong from '../components/FriendListPage/Peong';
import Birthday from '../components/FriendListPage/Birthday';
import FriendList from '../components/FriendListPage/FriendList';
import Line from '../components/common/Line';

const FriendListPage = () => {
    return (
        <div className='w-width h-height bg-White relative'>
            <TopBar />
            <Header />
            <div className="h-[635px] overflow-y-scroll scrollbar-hide">
                <UserProfile />
                <Line />
                <UpdatedProfile />
                <Line />
                <Peong />
                <Line />
                <Birthday />
                <Line />
                <FriendList />
            </div>
            <div className='absolute bottom-0 w-width'>
                <NavBar />
                <HomeIndicator />
            </div>
        </div>
    );
}

export default FriendListPage;
