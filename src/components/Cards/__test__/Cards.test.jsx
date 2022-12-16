import { render, screen } from '@testing-library/react';
import paints from '../../../mocks/paints.json';
import Cards from '../Cards';

describe('Cards', () => {
  test('Should render Cards', () => {
    render(<Cards paints={paints} />);
  });

  test('Should render 5 cards', () => {
    render(<Cards paints={paints} />);
    const cards = screen.getAllByRole('article');

    expect(cards.length).toBe(5);
  });
});
