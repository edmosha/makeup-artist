import React, {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useContext,
} from 'react';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'isAuth';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuthState] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored === 'true') {
      setIsAuthState(true);
    }
  }, []);

  const setIsAuth = (value: boolean) => {
    setIsAuthState(value);
    localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
