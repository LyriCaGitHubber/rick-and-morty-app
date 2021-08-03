import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');
const headerElement = document.createElement('header');
const h1Element = document.createElement('h1');
h1Element.innerText = 'Rick and Morty';
headerElement.append(h1Element);
const InputElement = document.createElement('input');
InputElement.placeholder = 'Type something in';
mainElement.append(headerElement, InputElement);

if (app !== null) {
  app.append(mainElement);
}
