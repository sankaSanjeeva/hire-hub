'use client';

import { createContext, useContext, useState } from 'react';
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { User } from '@prisma/client';

type AuthProviderProps = {
  initialUser?: Omit<User, 'passwordHash'>;
};

type AuthProviderState = {
  user?: Omit<User, 'passwordHash'>;
  isAuth: boolean;
  setUser: Dispatch<SetStateAction<AuthProviderState['user']>>;
};

const initialState: AuthProviderState = {
  isAuth: false,
  setUser: () => {},
};

const AuthProviderContext = createContext<AuthProviderState>(initialState);

export function AuthProvider({
  children,
  initialUser,
}: PropsWithChildren<AuthProviderProps>) {
  const [user, setUser] = useState<AuthProviderState['user']>(initialUser);

  const isAuth = !!user?.id;

  return (
    <AuthProviderContext.Provider value={{ user, isAuth, setUser }}>
      {children}
    </AuthProviderContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthProviderContext);

  if (context === undefined)
    throw new Error('useAuth must be used within a AuthProvider');

  return context;
};
