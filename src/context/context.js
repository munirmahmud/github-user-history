import React, { createContext, useContext, useState } from 'react';
import demoFollowers from './data/demoFollowers';
import demoRepos from './data/demoRepos';
import demoUser from './data/demoUser';

const GitContext = createContext();

export const GithubContext = () => {
    return useContext(GitContext);
};

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(demoUser);
    const [followers, setFollowers] = useState(demoFollowers);
    const [repos, setRepos] = useState(demoRepos);

    return (
        <GitContext.Provider value={{ githubUser, followers, repos }}>
            {children}
        </GitContext.Provider>
    );
};

export default GithubProvider;
