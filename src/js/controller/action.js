export const ArrangeList = (list) => list.map((item, index) => ({ ...item, index }));

export const AddtoList = (description, list) => {
  const todo = [{ index: 1, description, completed: false }, ...list];
  return ArrangeList(todo);
};

export const setCompleted = (id, value, list) => {
  const todos = list.map((todo) => {
    if (todo.index === id) { return { ...todo, completed: value }; }
    return todo;
  });
  return todos;
};

export const removeCompleted = (list) => list.filter((todo) => !todo.completed);