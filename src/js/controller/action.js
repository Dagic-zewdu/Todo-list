import RenderList from './render-list';
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
  RenderList(todos);
  return todos;
};