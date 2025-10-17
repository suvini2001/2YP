import { createContext, useMemo } from 'react';
import { doctors } from '../assets/assets_frontend/assets';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const value = useMemo(() => ({
        doctors
    }), []);
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};  



export default AppContextProvider;
