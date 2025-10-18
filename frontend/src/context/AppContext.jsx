import { createContext, useMemo } from 'react';
import { doctors } from '../assets/assets_frontend/assets';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const currencySymbol = "$";
    const value = useMemo(() => ({
        doctors,
        currencySymbol
    }), []);
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};  



export default AppContextProvider;
