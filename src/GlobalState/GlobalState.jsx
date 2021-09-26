import React, { useState } from 'react';

export const MainContext = React.createContext();

const GlobalState = ({ children }) => {
  const [me, setMe] = useState(false);
  const [skills, setSkills] = useState(false);
  const [work, setWork] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <MainContext.Provider
      value={{
        me,
        setMe,
        skills,
        setSkills,
        work,
        setWork,
        contact,
        setContact,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export default GlobalState;
