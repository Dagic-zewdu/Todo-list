import { renderInHtml } from '../dom/render';

const RenderList = (todos) => {
  let li = '';
  todos.forEach((todo) => {
    li += ` <li class="list-item">
   <div class="description-container">
       <input type="checkbox" class='checkbox' id="${todo.index}" value="${todo.index}">
       <p class="description-text">${todo.description}</p>
   </div>
   <div class="three-dots">
       <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/three-dots-3503935-2935846.png"
           class="options" alt="options">
   </div>
</li>`;
  });
  renderInHtml(li, 'ul.todo-list');
};
export default RenderList;