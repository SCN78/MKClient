import React, { useState } from 'react'
import { AuthenticatedUserContext } from '../context/AuthContext';
import RootNavigator from './RootNavigator';

export default function Routes() {
    const [user, setUser] = useState(null);

    return (
        <AuthenticatedUserContext.Provider value={[user, setUser]}>
            <RootNavigator />
        </AuthenticatedUserContext.Provider>        
    );
}
