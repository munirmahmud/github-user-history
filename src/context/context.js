import React, { createContext, useContext, useState } from 'react';
import demoFollowers from './data/demoFollowers';
import demoUser from './data/demoUser';

const GitContext = createContext();

export const GithubContext = () => {
    return useContext(GitContext);
};

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(demoUser);
    const [followers, setFollowers] = useState(demoFollowers);

    return (
        <GitContext.Provider value={{ githubUser, followers }}>
            {children}
        </GitContext.Provider>
    );
};

export default GithubProvider;
