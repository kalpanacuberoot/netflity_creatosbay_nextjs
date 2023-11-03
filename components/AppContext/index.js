// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export function AppProvider({ children }) {
//   const [sharedData, setSharedData] = useState(null);

//   return <AppContext.Provider value={{ sharedData, setSharedData }}>{children}</AppContext.Provider>;
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }

import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

