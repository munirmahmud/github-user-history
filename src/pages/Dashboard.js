import React from 'react';
import Repos from '../components/Repos/Repos';
import UserInfo from '../components/User/Info/UserInfo';
import User from '../components/User/User';

const Dashboard = () => {
    return (
        <div>
            <UserInfo />
            <User />
            <Repos />
        </div>
    );
};

export default Dashboard;
