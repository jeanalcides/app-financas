export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem('db-mov')) ?? [];

export const setLocalStorage = (dbName, data) =>
  localStorage.setItem(dbName, JSON.stringify(data));
