export const selectDom = (selector) => document.querySelector(selector);
export const selectMultipleDom = (selector) => document.querySelectorAll(selector);

export const Input = selectDom('input.input');
export const form = selectDom('#add-form');
export const resetIcon = selectDom('img.icon');
export const btnClearCompleted = selectDom('button#clear-completed');
