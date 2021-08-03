import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');
const headerElement = document.createElement('header');
const h1Element = document.createElement('h1');
h1Element.innerText = 'Rick and Morty';

mainElement.append(headerElement, h1Element);

if (app !== null) {
  app.append(mainElement);
}
