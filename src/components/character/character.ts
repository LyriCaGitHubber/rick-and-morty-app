import { createElement } from '../../utils/createElement';
import styles from './character.module.css';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  status,
  species,
  origin,
  thumbnail,
}: Character): HTMLElement {
  return createElement('article', {
    className: styles.character,
    childElements: [
      createElement('img', {
        className: styles.character__image,
        src: thumbnail,
        alt: 'Character',
      }),
      createElement('div', {
        childElements: [
          createElement('h2', {
            className: 'character__name',
            innerText: name,
          }),
          createElement('section', {
            className: 'character__aliveStatus',
            childElements: [
              createElement('p', {
                innerText: 'Alive?',
              }),
              createElement('p', {
                innerText: status,
              }),
            ],
          }),
          createElement('section', {
            className: 'character__race',
            childElements: [
              createElement('p', {
                innerText: 'Species:',
              }),
              createElement('p', {
                innerText: species,
              }),
            ],
          }),
          createElement('section', {
            className: 'CharacterFirstSeenIn',
            childElements: [
              createElement('p', {
                innerText: 'First seen in:',
              }),
              createElement('p', {
                innerText: origin,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
