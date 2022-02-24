const { AddtoList, RemoveTodo } = require('../controller/action');
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
        expect(key === 'index' || key === 'completed' || key === 'description').toBeTruthy();
      });
      test('Description should not be null', () => {
        expect(todo.description.length > 0).toBeTruthy();
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
});