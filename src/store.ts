import { create } from "zustand";
import { fetchUser, type User } from "./api/userApi";

type UserState = {
  user: User;
  loading: boolean;
  error: string | null;
  getUser: (id: string) => Promise<void>;
};

interface OverlayStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

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

export const useOverlayStore = create<OverlayStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export { useUser };
