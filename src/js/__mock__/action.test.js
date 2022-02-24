const {
  AddtoList, RemoveTodo, editTodos, setCompleted, removeCompleted,
} = require('../controller/action');
const { randomString } = require('../utils/random.id');

describe('Adding to storage', () => {
  let todos = [];
  for (let i = 0; i < 5; i += 1) {
    todos = AddtoList(randomString(i + 3), todos);
  }
  todos.forEach((todo) => {
    const keys = Object.keys(todo);
    keys.forEach((key) => {
      test('keys should be index or completed or description ', () => {
        expect(key === 'index' || key !== 'completed' || key !== 'description').toBeTruthy();
      });
      test('Description should not be null', () => {
        expect(todo.description.length !== 0).toBeTruthy();
      });
      test('The completed task should have initial value false', () => {
        expect(todo.completed).toBeFalsy();
      });
      test('index key should be number', () => {
        expect(typeof todo.index === 'number').toBeTruthy();
      });
    });
  });
  test('Should remove the todo', () => {
    expect(RemoveTodo('1', todos)).toHaveLength(todos.length - 1);
  });

  test('The changed index and description should have the save value', () => {
    const editedTodos = editTodos('1', 'blabla', todos);
    const editedTodo = editedTodos.find((todo) => todo.index === 1);
    expect(editedTodo.description === 'blabla').toBeTruthy();
  });
  test('The updated task with the index completed should have a value that is provided', () => {
    const editedTodos = setCompleted('1', true, todos);
    const editedTodo = editedTodos.find((todo) => todo.index === 1);
    expect(editedTodo.completed === true).toBeTruthy();
  });
});
