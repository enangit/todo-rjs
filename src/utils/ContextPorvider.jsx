import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children, value}) => {

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export const ModalContext = createContext();

export const ModalContextProvider = ({ children, value}) => {

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )

}


