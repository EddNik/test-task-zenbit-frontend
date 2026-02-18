import { cookies } from "next/headers";
import { api } from "./api";
import { User, Deal } from "../../types/deals";

interface FetchNotesResponse {
  notes: Deal[];
  totalPages: number;
}

export async function fetchNotes(): Promise<FetchNotesResponse> {
  const cookieStore = await cookies();

  const options = {
    headers: { Cookie: cookieStore.toString() },
  };

  try {
    const { data } = await api.get<FetchNotesResponse>("/deals", options);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getServerMe(): Promise<User> {
  const cookieStore = await cookies();
  const options = {
    headers: { Cookie: cookieStore.toString() },
  };
  try {
    const { data } = await api.get<User>("/users/me", options);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function checkServerSession() {
  const cookieStore = await cookies();
  const options = {
    headers: { Cookie: cookieStore.toString() },
  };
  try {
    const response = await api.get("/auth/session", options);
    return response;
  } catch (error) {
    throw error;
  }
}
