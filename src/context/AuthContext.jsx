import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export default AuthContext;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};