import React, { useState, createContext } from 'react';

export const ApiContext = createContext();

export const ApiProvider = (props) => {  
  const [messages, setMessages] = useState();

  return (
    <ApiContext.Provider value={[messages, setMessages]}>
          {props.children}
    </ApiContext.Provider>
  );
};
