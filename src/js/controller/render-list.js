import { renderInHtml } from '../dom/render';
import { AddtoStorage } from './storage';
import { CheckForm } from './action';
import { selectDom } from '../dom/selector';

const RenderList = (todos, editInputForm) => {
  let li = '';
  const notification = selectDom('p#clear-uncompleted');
  if (todos.length) {
    todos.forEach((todo) => {
      if (todo.completed) {
        li += ` <li class="list-item">
   <div class="description-container">
     <p class="success" id='${todo.index}'>&#10003; </p>
   <p class="description-text"><s>  ${todo.description} </s></p>
   </div>
   <div class="three-dots" id='${todo.index}'>
   🖊
   </div>
</li>
`;
      } else {
        li += `<li class="list-item">
        <div class="description-container">
            <input type="checkbox" class='checkbox' id="${todo.index}" value="${todo.index}">
            <p class="description-text">${todo.description}</p>
        </div>
        <div class="three-dots" id='${todo.index}'>
        🖊
        </div>
     </li>
   `;
      }
      // edit form
      li += `<li>
      <form id='${todo.index}' class='${CheckForm(todo.index, editInputForm) ? 'edit-form' : 'edit-form none'}'>
      <input type="text" required class="input edit-input" id='${todo.index}' /> 
      </form>
      </li>`;
    });
  } else {
    li = '<li class="center danger"> No todos yet!</li>';
  }
  AddtoStorage(todos);
  notification.innerText = todos.filter((todo) => !todo.completed).length;
  renderInHtml(li, 'ul.todo-list');
};
export default RenderList;