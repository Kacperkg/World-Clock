import axios from "axios";

export interface User {
  id: string;
  locations: Location[];
}

export interface Users {
  users: User[];
}

export interface Location {
  id: string; //
  cityName: string; // e.g. "Tokyo"
  country?: string; // optional: "Japan"
  timezone: string; // e.g. "Asia/Tokyo"
  latitude?: number; // optional for map visualization
  longitude?: number; // optional
  isFavorite?: boolean; // optional toggle
  main?: boolean;
}

const API_URL = "http://localhost:4000/users";

export const fetchUsers = async (): Promise<Users[]> => {
  const res = await axios.get<Users[]>(API_URL);
  return res.data;
};

export const fetchUser = async (id: string) => {
  try {
    const res = await axios.get<User>(`${API_URL}/${id}`);
    return res.data;
  } catch (err: any) {
    try {
      const newUser: User = {
        id,
        locations: [],
      };
      const createdUser = await addUser(newUser);
      console.log("new user added");
      return createdUser;
    } catch (addErr: any) {
      console.error("Failed to add user:", addErr);
      return null;
    }
  }
};

export const addUser = async (user: User) => {
  const res = await axios.post<User>(API_URL, user);
  return res.data;
};
