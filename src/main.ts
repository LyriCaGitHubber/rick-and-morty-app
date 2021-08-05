import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';
import { getCharacters } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const characters: Character[] = await getCharacters();

const cardWrapper = createElement('div', {
  className: 'characterCardWrapper',
  childElements: characters.map((character) => createCharacterCard(character)),
});

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
          type: 'searchbar',
          placeholder: 'Find Character',
          className: 'findCharacters',
          oninput: async (event) => {
            cardWrapper.innerHTML = '';
            const searchValue = (<HTMLInputElement>event.target).value;
            const findCharacters = await getCharacters(searchValue);
            const searchedCharacters = findCharacters.map((character) =>
              createCharacterCard(character)
            );
            console.log(searchedCharacters);
            cardWrapper.append(...searchedCharacters);
          },
        }),
        cardWrapper,
      ],
    }),
  ],
});

//document.querySelector<HTMLDivElement>('#app')?.append(mainElement)

if (app !== null) {
  app.append(page);
}
