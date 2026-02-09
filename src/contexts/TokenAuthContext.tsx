import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { getToken, setToken, removeToken } from '@/api/apiProvider';

interface TokenAuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  refresh: () => void;
}

const TokenAuthContext = createContext<TokenAuthContextType | undefined>(undefined);

export const TokenAuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize token from localStorage on mount
  useEffect(() => {
    const storedToken = getToken();
    setTokenState(storedToken);
    setIsLoading(false);
  }, []);

  const login = useCallback((newToken: string) => {
    setToken(newToken);
    setTokenState(newToken);
  }, []);

  const logout = useCallback(() => {
    removeToken();
    setTokenState(null);
  }, []);

  const refresh = useCallback(() => {
    const currentToken = getToken();
    setTokenState(currentToken);
  }, []);

  return (
    <TokenAuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
        refresh,
      }}
    >
      {children}
    </TokenAuthContext.Provider>
  );
};

export const useTokenAuth = () => {
  const context = useContext(TokenAuthContext);
  if (context === undefined) {
    throw new Error('useTokenAuth must be used within a TokenAuthProvider');
  }
  return context;
};
