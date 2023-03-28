import React, { useState, createContext } from 'react';
import useLocalStorage from '../storage/local.storage';
export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', '');
  const [message, setMessage] = useState('');

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        message,
        setMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
