import React, { useState, useEffect } from 'react';
import HomeIndicator from '../components/common/HomeIndicatior';
import TopBar from '../components/common/TopBar';
import NavBar from '../components/common/NavBar';
import Header from '../components/MyProfilePage/Header';
import UserProfile from '../components/MyProfilePage/UserProfile';
import Line from '../components/common/Line';
import ProfileInfo from '../components/MyProfilePage/ProfileInfo';
import { useUser } from '../contexts/UserContext';

const MyProfilePage = () => {
    const { currentUser } = useUser();

    return (
        <div className='w-width h-height bg-White relative'>
            <TopBar />
            <Header />
            <UserProfile/>
            <Line />
            {currentUser && (
                <>
                    <ProfileInfo title="전화번호" content={`+82 10-${currentUser.phoneNumber}`}/>
                    <ProfileInfo title="이메일" content={currentUser.email}/>
                    <ProfileInfo title="SNS" content={currentUser.sns}/>
                </>
            )}
            <div className='absolute bottom-0 w-width'>
                <NavBar />
                <HomeIndicator />
            </div>
        </div>
    );
}

export default MyProfilePage;
