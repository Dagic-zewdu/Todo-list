import { AddtoList, removeCompleted, setCompleted } from './js/controller/action';
import RenderList from './js/controller/render-list';
import { getFromStorage } from './js/controller/storage';
import {
  btnClearCompleted, form, Input, resetIcon, selectMultipleDom,
} from './js/dom/selector';
import './styles/style.css';

let Todos = getFromStorage();
// checkbox addEventlistener
const addCompletedEventListener = () => {
  const checkboxs = selectMultipleDom('input.checkbox');
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      Todos = setCompleted(checkbox.id, checkbox.checked, Todos);
      RenderList(Todos);
      addCompletedEventListener();
    });
  });
};

// handle submit
const handleSubmit = (e) => {
  e.preventDefault();
  const todos = AddtoList(Input.value, Todos);
  Todos = todos;
  RenderList(todos);
  addCompletedEventListener();
  Input.value = '';
};
RenderList(Todos);
addCompletedEventListener();

// clear completed button
btnClearCompleted.addEventListener('click', () => {
  const todos = removeCompleted(Todos);
  Todos = todos;
});

// reset icon
resetIcon.addEventListener('click', () => {
  Todos = [];
  RenderList(Todos);
  addCompletedEventListener();
});

form.addEventListener('submit', handleSubmit);