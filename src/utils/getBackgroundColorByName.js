import getFirstLetterOfName from '~/utils/getFirstLetterOfName';

export default function getBackgroundColorByName(name) {
  const letter = getFirstLetterOfName(name);
  const colors = [
    '#fa8d68', // A
    '#90d26c', // B
    '#68a0fa', // C
    '#fab668', // D
    '#8368fa', // E
    '#fa68b5', // F
    '#5fe2c4', // G
    '#f55a5a', // H
  ];
  const indexFistLetter = 65;
  const index = (letter.charCodeAt() - indexFistLetter) % colors.length;

  return colors[index];
}
