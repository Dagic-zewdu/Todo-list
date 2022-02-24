const { AddtoStorage } = require('./storage');

const ArrangeList = (list) => list.map((item, index) => ({ ...item, index }));

const AddtoList = (description, list) => {
  const todo = [...list, { index: 1, description, completed: false }];
  return ArrangeList(todo);
};

const setCompleted = (id, value, list) => {
  const todos = list.map((todo) => {
    if (todo.index.toString() === id) { return { ...todo, completed: value }; }
    return todo;
  });
  return todos;
};

const removeCompleted = (list) => {
  const todos = ArrangeList(list.filter((todo) => !todo.completed));
  return todos;
};

const CheckForm = (id, editFormIdList) => {
  const form = editFormIdList.find((index) => index === id.toString());
  return form;
};

const AddRemoveEditForm = (id, editFormIdList) => {
  const check = CheckForm(id, editFormIdList);
  if (check) { return editFormIdList.filter((index) => index !== id.toString()); }
  return [...editFormIdList, id];
};

const removeUnCompleted = (list) => {
  const todos = ArrangeList(list.filter((todo) => todo.completed));
  AddtoStorage(todos);
  return todos;
};

const RemoveTodo = (id, todos) => {
  const Todos = ArrangeList(todos.filter((todo) => todo.index.toString() !== id));
  return Todos;
};
const editTodos = (id, description, todos) => {
  const todo = todos.find((t) => t.index.toString() === id);
  const Todo = { ...todo, description };
  const newTodos = todos.map((t) => (t.index.toString() === id ? Todo : t));
  return newTodos;
};

module.exports = {
  AddtoList,
  RemoveTodo,
  editTodos,
  removeUnCompleted,
  AddRemoveEditForm,
  CheckForm,
  removeCompleted,
  setCompleted,
};