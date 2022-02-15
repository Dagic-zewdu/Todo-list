import { AddtoList, setCompleted } from './js/controller/action';
import RenderList from './js/controller/render-list';
import { addCompleteEventListener, addRemoveCompletedListener, addResetEventListener } from './js/controller/event';
import { form, Input } from './js/dom/selector';
import TodoList from './js/file/todo';
import './styles/style.css';

let checkboxs;
let Todos = TodoList;
const reset = () => { Todos = []; RenderList(Todos); };
const removeCompleted = () => {
  Todos = removeCompleted(Todos);
  RenderList(Todos);
};
const setCompletedTodos = (id, value) => {
  Todos = setCompleted(id, value, Todos);
  RenderList(Todos);
};
const handleSubmit = (e) => {
  e.preventDefault();
  const todos = AddtoList(Input.value, Todos);
  Todos = todos;
  RenderList(todos);
  window.addEventListener('DOMContentLoaded', () => {
    checkboxs = document.querySelectorAll('input.checkbox');
    addCompleteEventListener(checkboxs, setCompletedTodos);
  });
};
RenderList(Todos);
addResetEventListener(reset);
addRemoveCompletedListener(removeCompleted);
window.addEventListener('DOMContentLoaded', () => {
  checkboxs = document.querySelectorAll('input.checkbox');
  addCompleteEventListener(checkboxs, setCompletedTodos);
});
form.addEventListener('submit', handleSubmit);