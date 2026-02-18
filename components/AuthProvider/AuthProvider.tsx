"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAppDispatch } from "@/lib/store/hooks";
import { setUser, clearIsAuthenticated } from "@/lib/store/authSlice";
import { ReactNode, useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUser() {
      const isAuthenticated = await checkSession();
      if (isAuthenticated) {
        const user = await getMe();
        if (user) dispatch(setUser(user));
      } else {
        dispatch(clearIsAuthenticated());
      }
    }
    fetchUser();
  }, [dispatch]);

  return children;
}

export default AuthProvider;
