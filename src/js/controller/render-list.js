import { renderInHtml } from '../dom/render';
import { AddtoStorage } from './storage';

const RenderList = (todos) => {
  let li = '';
  if (todos.length) {
    todos.forEach((todo) => {
      if (todo.completed) {
        li += `<s> <li class="list-item">
   <div class="description-container">
       <input type="checkbox" checked class='checkbox' id="${todo.index}" value="${todo.index}">
       <p class="description-text">${todo.description}</p>
   </div>
   <div class="three-dots">
       <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/three-dots-3503935-2935846.png"
           class="options" alt="options">
   </div>
</li>
</s>`;
      } else {
        li += `<li class="list-item">
        <div class="description-container">
            <input type="checkbox" class='checkbox' id="${todo.index}" value="${todo.index}">
            <p class="description-text">${todo.description}</p>
        </div>
        <div class="three-dots">
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/three-dots-3503935-2935846.png"
                class="options" alt="options">
        </div>
     </li>`;
      }
    });
  } else {
    li = '<li class="center danger"> No todos yet!</li>';
  }
  AddtoStorage(todos);
  renderInHtml(li, 'ul.todo-list');
};
export default RenderList;