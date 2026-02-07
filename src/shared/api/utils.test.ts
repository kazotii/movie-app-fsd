import { getPosterUrl } from "./utils";

test('return full PosterURL', () => {
  expect(getPosterUrl('/abc.jpg')).toBe('https://image.tmdb.org/t/p/w500/abc.jpg');
});

test('return placeholder', () => {
  expect(getPosterUrl(null)).toContain('via.placeholder.com');
});