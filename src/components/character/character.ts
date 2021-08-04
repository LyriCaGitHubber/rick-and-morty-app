import { createElement } from '../../utils/createElement';
import './character.css';

export function createCharacterCard() {
  return createElement('article', {
    className: 'character',
    childElements: [
      createElement('img', {
        className: 'character__image',
        src: 'https://rickandmortyapi.com/api/character/avatar/90.jpeg',
        alt: 'Character',
      }),
      createElement('div', {
        childElements: [
          createElement('h2', {
            className: 'character__name',
            innerText: 'Funny guy',
          }),
          createElement('section', {
            className: 'character__aliveStatus',
            childElements: [
              createElement('p', {
                innerText: 'Is this character alive',
              }),
              createElement('p', {
                innerText: 'Yes is alive',
              }),
            ],
          }),
          createElement('section', {
            className: 'character__race',
            childElements: [
              createElement('p', {
                innerText: 'Race of the character',
              }),
              createElement('p', {
                innerText: 'Is a human',
              }),
            ],
          }),
          createElement('section', {
            className: 'CharacterFirstSeenIn',
            childElements: [
              createElement('p', {
                innerText: 'First seen in',
              }),
              createElement('p', {
                innerText: 'In the first episode',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
