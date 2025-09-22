import { v4 as uuidv4 } from "uuid";

export const USER_ID_KEY = "WorldClockUserId";

function getOrCreateUserId(): string | null {
  if (typeof window === "undefined") return null;

  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem(USER_ID_KEY, userId);
  }

  return userId;
}

export { getOrCreateUserId };
