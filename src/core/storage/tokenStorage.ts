export const tokenStorage = {
  save: (t: string) => localStorage.setItem("token", t),
  get: () => localStorage.getItem("token"),
  clear: () => localStorage.removeItem("token"),
};
