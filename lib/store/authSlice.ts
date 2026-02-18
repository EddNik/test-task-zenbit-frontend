// import { User } from "@/types/user";
// import { create } from "zustand";

// interface AuthStore {
//   isAuthenticated: boolean;
//   user: User | null;
//   setUser: (user: User) => void;
//   clearIsAuthenticated: () => void;
// }

// export const useAuthStore = create<AuthStore>()(set => {
//   return {
//     isAuthenticated: false,
//     user: null,
//     setUser: (user: User) => {
//       set(() => ({ user, isAuthenticated: true }));
//     },
//     clearIsAuthenticated: () => {
//       set(() => ({ user: null, isAuthenticated: false }));
//     },
//   };
// });

// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/deals";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearIsAuthenticated: state => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
