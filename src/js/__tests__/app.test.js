import sortCharacters from '../app';

test('ordered by health status #1. 3 different values', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const data = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});

test('ordered by health status #2. 3 same values #1', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ];

  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});

test('ordered by health status #3. 3 same values (max)', () => {
  const characters = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];

  const data = [
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});

test('ordered by health status #4. 2 same values (max), 1 different', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];

  const data = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 10 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});

test('ordered by health status #5. 2 same values, 1 different', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 100 },
  ];

  const data = [
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});

test('ordered by health status #6. 2 same values, 1 different', () => {
  const characters = [
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 80 },
  ];

  const data = [
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 10 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});

test('ordered by health status #7. 5 values', () => {
  const characters = [
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 100 },
  ];

  const data = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 10 },
  ];

  const sorted = sortCharacters(characters);

  expect(sorted).toEqual(data);
});
