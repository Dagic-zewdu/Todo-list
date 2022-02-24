import {
  AddRemoveEditForm,
  AddtoList, editTodos, removeCompleted, RemoveTodo, removeUnCompleted, setCompleted,
} from './js/controller/action';
import RenderList from './js/controller/render-list';
import { AddtoStorage, getFromStorage } from './js/controller/storage';
import {
  btnClearCompleted, form, Input, resetIcon, selectMultipleDom,
} from './js/dom/selector';
import './styles/style.css';

let Todos = getFromStorage();
let editInputForm = [];
// checkbox addEventlistener
const addEventListeners = () => {
  const checkboxs = selectMultipleDom('input.checkbox');
  const editButton = selectMultipleDom('div.three-dots');
  const checkButton = selectMultipleDom('p.success');
  const editForms = selectMultipleDom('form.edit-form');
  const editInputs = selectMultipleDom('input.edit-input');
  const deleteButton = selectMultipleDom('button.trash');
  checkButton.forEach((button) => {
    button.addEventListener('click', () => {
      Todos = setCompleted(button.id, false, Todos);
      RenderList(Todos, editInputForm);
      addEventListeners();
    });
  });
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      Todos = setCompleted(checkbox.id, checkbox.checked, Todos);
      RenderList(Todos, editInputForm);
      addEventListeners();
    });
  });
  editButton.forEach((button) => {
    button.addEventListener('click', () => {
      editInputForm = AddRemoveEditForm(button.id, editInputForm);
      RenderList(Todos, editInputForm);
      addEventListeners();
    });
  });
  editInputs.forEach((input) => {
    const value = Todos.find((todo) => todo.index.toString() === input.id);
    input.value = value ? value.description : '';
  });

  editForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      editInputs.forEach((input) => {
        if (input.id === form.id) {
          const { value } = input;
          const todos = editTodos(input.id, value, Todos);
          AddtoStorage(todos);
          Todos = todos;
          editInputForm = AddRemoveEditForm(input.id, editInputForm);
          RenderList(Todos, editInputForm);
          addEventListeners();
        }
      });
    });
  });
  deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
      Todos = RemoveTodo(button.id, Todos);
      editInputForm = AddRemoveEditForm(button.id, editInputForm);
      RenderList(Todos, editInputForm);
      addEventListeners();
    });
  });
};

// handle submit
const handleSubmit = (e) => {
  e.preventDefault();
  const todos = AddtoList(Input.value, Todos);
  Todos = todos;
  RenderList(todos, editInputForm);
  addEventListeners();
  Input.value = '';
};
RenderList(Todos, editInputForm);
addEventListeners();

// clear completed button
btnClearCompleted.addEventListener('click', () => {
  const todos = removeCompleted(Todos);
  AddtoStorage(todos);
  RenderList(todos, editInputForm);
  addEventListeners();
  Todos = todos;
});

// reset icon
resetIcon.addEventListener('click', () => {
  const todos = removeUnCompleted(Todos);
  RenderList(todos, editInputForm);
  addEventListeners();
  Todos = todos;
});

form.addEventListener('submit', handleSubmit);