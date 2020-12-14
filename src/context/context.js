import React, { createContext, useContext } from 'react';

const GitContext = createContext();

export const GithubContext = () => {
    return useContext(GitContext);
};

const GithubProvider = ({children}) => {
    return (
        <GitContext.Provider value='Hello Munir'>
            {children}
        </GitContext.Provider>
    );
};

export default GithubProvider;
