import { selectDom } from './selector';

export const renderInHtml = (html, selector) => {
  const dom = selectDom(selector);
  dom.innerHTML = html;
};

export const renderInText = (message, selector) => {
  const dom = selectDom(selector);
  dom.innerText = message;
};