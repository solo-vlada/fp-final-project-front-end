import React, { useState, createContext } from 'react';

export const ApiContext = createContext();
export const OffersContext = createContext();

export const ApiProvider = (props) => {  
  const [messages, setMessages] = useState();
  const [offers, setOffers] = useState();

  return (
    <OffersContext.Provider value={[offers, setOffers]}>
      <ApiContext.Provider value={[messages, setMessages]}>
            {props.children}
      </ApiContext.Provider>
    </OffersContext.Provider>
  );
};
