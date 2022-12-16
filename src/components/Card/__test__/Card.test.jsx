import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

const props = {
  name: 'Mike',
  phone: '111-111-1111',
  email: 'mike@email.com',
  image: {
    url: 'https://images.unsplash.com/photo-1536849460588-696219a9e98d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80',
    alt: 'Mike paint xxxx',
  },
  favoured: false,
};

describe('Card components', () => {
  test('should render a Card', () => {
    render(<Card {...props} />);
  });

  test('should render the name', () => {
    render(<Card {...props} />);
    expect(
      screen.getByRole('heading', { name: props.name })
    ).toBeInTheDocument();
  });

  test('should render the phone', () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.phone)).toBeInTheDocument();
  });

  test('should render the email', () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.email)).toBeInTheDocument();
  });

  test('should render the image with correct src', () => {
    render(<Card {...props} />);
    expect(screen.getByAltText('Mike paint xxxx').src).toBe(props.image.url);
  });

  test('should show outline heart', () => {
    render(<Card {...props} />);
    expect(screen.getByAltText(/outline heart/i)).toBeInTheDocument();
  });

  test('should show not filled heart', () => {
    render(<Card {...props} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
  });

  test('should show not outline heart', () => {
    render(<Card {...props} favoured />);
    expect(screen.queryByAltText(/outline heart/i)).not.toBeInTheDocument();
  });

  test('should show filled heart', () => {
    render(<Card {...props} favoured />);
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test('should toggle the heart images', () => {
    render(<Card {...props} />);

    const button = screen.getByRole('button');

    expect(screen.getByAltText(/outline heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.queryByAltText(/outline heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });
});
