import React, { createContext, useContext, useState } from 'react';
import demoUser from './data/demoUser';

const GitContext = createContext();

export const GithubContext = () => {
    return useContext(GitContext);
};

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(demoUser);

    return (
        <GitContext.Provider value={{ githubUser }}>
            {children}
        </GitContext.Provider>
    );
};

export default GithubProvider;
