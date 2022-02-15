import { btnClearCompleted, resetIcon } from '../dom/selector';

export const addCompleteEventListener = (checkboxs, handler) => {
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      handler(checkbox.id, checkbox.value);
    });
  });
};

export const addResetEventListener = (handler) => {
  resetIcon.addEventListener('click', handler);
};

export const addRemoveCompletedListener = (handler) => {
  btnClearCompleted.addEventListener('click', () => handler);
};