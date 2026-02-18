import { Deal, NewDeal } from "../../types/deals";
import { api } from "./api";
import { User } from "../../types/deals";

interface FetchDealsResponse {
  deals: Deal[];
}

export async function fetchNotes(): Promise<FetchDealsResponse> {
  try {
    const { data } = await api.get<FetchDealsResponse>("/deals");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createDeal(newDeal: NewDeal): Promise<Deal> {
  try {
    const { data: note } = await api.post<Deal>("/create", newDeal);
    return note;
  } catch (error) {
    throw error;
  }
}

export type RegisterRequest = {
  email: string;
  password: string;
  username: string;
};

export async function register(request: RegisterRequest): Promise<User> {
  try {
    const response = await api.post<User>("/auth/register", request);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export type LoginRequest = {
  email: string;
  password: string;
};

export async function login(request: LoginRequest): Promise<User> {
  try {
    const response = await api.post<User>("/auth/login", request);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function logout(): Promise<void> {
  try {
    await api.post("/auth/logout");
  } catch (error) {
    throw error;
  }
}

export interface CheckSessionRequest {
  success: boolean;
}

export async function checkSession(): Promise<boolean> {
  try {
    const response = await api.get<CheckSessionRequest>("/auth/session");
    return response.data.success;
  } catch (error) {
    throw error;
  }
}

export async function getMe(): Promise<User> {
  try {
    const { data } = await api.get<User>("/users/me");
    return data;
  } catch (error) {
    throw error;
  }
}

export type UpdateMeRequest = {
  username: string;
};

export async function updateMe(request: UpdateMeRequest): Promise<User> {
  try {
    const { data } = await api.patch<User>("/users/me", request);
    return data;
  } catch (error) {
    throw error;
  }
}
