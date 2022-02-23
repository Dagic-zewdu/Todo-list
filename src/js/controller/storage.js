const AddtoStorage = (list) => {
  const item = JSON.stringify(list);
  localStorage.setItem('todos', item);
};

const getFromStorage = () => {
  const todos = localStorage.getItem('todos');
  if (todos) { return JSON.parse(todos); }
  return [];
};

module.exports = { AddtoStorage, getFromStorage };