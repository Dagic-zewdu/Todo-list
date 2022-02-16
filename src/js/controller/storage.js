export const AddtoStorage = (list) => {
  const item = JSON.stringify(list);
  localStorage.setItem('todos', item);
};

export const getFromStorage = () => {
  const todos = localStorage.getItem('todos');
  if (todos) { return JSON.parse(todos); }
  return [];
};