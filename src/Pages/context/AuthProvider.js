import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase.js';
import useServices from '../hooks/useServices.js';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const services = useServices()

    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={{ allContexts, services }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;