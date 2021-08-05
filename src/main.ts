import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';
import { getCharacters } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const characters: Character[] = await getCharacters();

const page = createElement('div', {
  className: 'wrapper',
  childElements: [
    createElement('header', {
      className: 'header',
      childElements: [
        createElement('h1', {
          className: 'header__headline',
          innerText: 'Rick and Morty',
        }),
      ],
    }),
    createElement('main', {
      className: 'mainArea',
      childElements: [
        createElement('input', {
          value: 'New Character',
          type: 'button',
          placeholder: 'Type something in',
          className: 'findCharacters',
        }),
        createElement('div', {
          className: 'characterCardWrapper',
          childElements: characters.map((character) =>
            createCharacterCard(character)
          ),
        }),
      ],
    }),
  ],
});

//document.querySelector<HTMLDivElement>('#app')?.append(mainElement)

if (app !== null) {
  app.append(page);
}
