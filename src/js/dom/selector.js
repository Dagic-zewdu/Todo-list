export const selectDom = (selector) => document.querySelector(selector);
export const selectMultipleDom = (selector) => document.querySelectorAll(selector);

export const Input = selectDom('input.input');
export const form = selectDom('#add-form');
export const checkboxs = selectMultipleDom('input.checkbox');
export const resetIcon = selectDom('img.icon');
export const btnClearCompleted = selectDom('button#clear-completed');
