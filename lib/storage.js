// Small wrapper around localStorage so PlanContext doesn't have to
// worry about SSR (no `window`) or malformed JSON.

const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";

function readList(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeList(key, list) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(list));
  } catch {
    // Storage full or disabled — fail silently, in-memory state still works.
  }
}

export const storage = {
  getPlan: () => readList(PLAN_KEY),
  setPlan: (list) => writeList(PLAN_KEY, list),
  getSaved: () => readList(SAVED_KEY),
  setSaved: (list) => writeList(SAVED_KEY, list),
};
