import { Player } from '@rieken/app/components/player.type';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => ({ src, alt }: any) => <img src={src} alt={alt}/>);

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCardB from '../components/player-card-b';

describe('PlayerCardB', () => {
  const player: Player = {
    status: '',
    url: '',
    name: 'Test Player',
    imageUrl: 'https://example.com/image.jpg',
    pronouns: ['he', 'him'],
    derbyNumber: 123,
    socials: {
      twitter: 'https://twitter.com/testplayer',
      facebook: 'https://facebook.com/testplayer',
    }
  };

  it('renders correctly', () => {
    render(<PlayerCardB player={player} />);
    expect(screen.getByText(player.name)).toBeInTheDocument();
    expect(screen.getByText(player.pronouns.join('/'))).toBeInTheDocument();
    expect(screen.getByText(`#${player.derbyNumber}`)).toBeInTheDocument();
    expect(screen.getByAltText(player.name)).toHaveAttribute('src', player.imageUrl);
  });

  it('renders social media links', () => {
    render(<PlayerCardB player={player} />);
    const socials = screen.getAllByRole('link');
    expect(socials).toHaveLength(2);
    const hrefs = socials.map((social) => social.getAttribute('href'));
    expect(hrefs).toContain(player.socials?.twitter);
    expect(hrefs).toContain(player.socials?.facebook);
  });
});
