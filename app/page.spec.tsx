import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@rieken/app/page';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent('Big Easy Roller Derby');
  });
});