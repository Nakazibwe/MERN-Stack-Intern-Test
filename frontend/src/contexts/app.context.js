import React, { useState, createContext } from 'react';
import useLocalStorage from '../storage/local.storage';
export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', '');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({})

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        message,
        setMessage,
        data,
        setData,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
