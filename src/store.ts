import { create } from "zustand";
import { fetchUser, type User } from "./api/userApi";

type UserState = {
  user: User;
  loading: boolean;
  error: string | null;
  getUser: (id: string) => Promise<void>;
};

const useUser = create<UserState>((set) => ({
  user: { id: "", locations: [] },
  loading: false,
  error: null,
  getUser: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchUser(id);
      set({ user: data!, loading: false });
    } catch (err) {
      set({ error: "Failed to Fetch User" });
    }
  },
}));

export { useUser };
