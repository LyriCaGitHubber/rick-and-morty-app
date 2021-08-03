import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const contentSection = document.createElement('main');
const headerElement = document.createElement('header');
headerElement.className = 'header';
const h1Element = document.createElement('h1');
h1Element.className = 'header__headline';
h1Element.innerText = 'Rick and Morty';
headerElement.append(h1Element);
const InputElement = document.createElement('input');
InputElement.placeholder = 'Type something in';
contentSection.append(InputElement);

if (app !== null) {
  app.append(headerElement, contentSection);
}
