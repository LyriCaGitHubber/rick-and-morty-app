import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';

const app = document.querySelector<HTMLDivElement>('#app');

const characters: Character[] = [
  {
    name: 'Morty Smith',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/90.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
  {
    name: 'Morty Nr 2',
    thumbnail: 'https://rickandmortyapi.com/api/character/avatar/90.jpeg',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
  },
];

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
      childElements: [
        createElement('input', {
          value: 'Character finden',
          type: 'button',
          placeholder: 'Type something in',
          className: 'findCharacters',
        }),
        createElement('div', {
          childElements: characters.map((character) =>
            createCharacterCard(character)
          ),
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(page);
}
