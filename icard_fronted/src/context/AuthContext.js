import React, {useState, useEffect, createContext} from 'react';

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
});

export function AuthProvaider(props) {
    const { children } = props;
    const valueContext = {
        auth:null,
        login: () => console.log('login'),
        logout: () => console.log('logout')
    }

    return(
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}