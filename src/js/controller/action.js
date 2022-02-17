import { AddtoStorage } from './storage';

export const ArrangeList = (list) => list.map((item, index) => ({ ...item, index }));

export const AddtoList = (description, list) => {
  const todo = [...list, { index: 1, description, completed: false }];
  return ArrangeList(todo);
};

export const setCompleted = (id, value, list) => {
  const todos = list.map((todo) => {
    if (todo.index.toString() === id) { return { ...todo, completed: value }; }
    return todo;
  });
  return todos;
};

export const removeCompleted = (list) => {
  const todos = ArrangeList(list.filter((todo) => !todo.completed));
  AddtoStorage(todos);
  return todos;
};

export const CheckForm = (id, editFormIdList) => {
  const form = editFormIdList.find((index) => index === id.toString());
  return form;
};

export const AddRemoveEditForm = (id, editFormIdList) => {
  const check = CheckForm(id, editFormIdList);
  if (check) { return editFormIdList.filter((index) => index !== id.toString()); }
  return [...editFormIdList, id];
};

export const removeUnCompleted = (list) => {
  const todos = ArrangeList(list.filter((todo) => todo.completed));
  AddtoStorage(todos);
  return todos;
};

export const editTodos = (id, description, todos) => {
  const todo = todos.find((t) => t.index.toString() === id);
  const Todo = { ...todo, description };
  const newTodos = todos.map((t) => (t.index.toString() === id ? Todo : t));
  AddtoStorage(newTodos);
  return newTodos;
};