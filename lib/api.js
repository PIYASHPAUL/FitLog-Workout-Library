// Central place for every call to the FitLog API.
// Two endpoints are provided by the assignment:
//   GET /api/fitlog      -> all workouts
//   GET /api/fitlog/:id  -> a single workout

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

/**
 * Fetch every workout in the library.
 * Throws on network/response errors so callers can show an error state.
 */
export async function getAllWorkouts() {
  const res = await fetch(BASE_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load workouts (status ${res.status})`);
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/**
 * Fetch a single workout by id.
 * Falls back to `null` if the workout can't be found instead of throwing,
 * so the detail page can show a friendly "not found" message.
 */
export async function getWorkoutById(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  // Some APIs wrap a single item in an array — handle both shapes.
  if (Array.isArray(data)) {
    return data[0] ?? null;
  }
  return data ?? null;
}
