export const getLocalStorage = (db) =>
  JSON.parse(localStorage.getItem(db)) ?? [];

export const setLocalStorage = (dbName, data) =>
  localStorage.setItem(dbName, JSON.stringify(data));
