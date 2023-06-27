import { PlayerCardProps } from '@rieken/app/components/player-card';
import { FC } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';

config.autoAddCss = false;

const socialMediaMap = {
  twitter: faTwitter,
  facebook: faFacebook,
  instagram: faInstagram,
  tiktok: faTiktok,
  youtube: faYoutube,
  twitch: faTwitch,
};

const PlayerCardB: FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="card">
      {/*{Player Image}*/}
      <Image
        src={player.imageUrl}
        alt={player.name}
        className="w-full object-cover"
      />
      <div className="text-center">
        <span className="text-gold font-bold">{player.name}</span>
        <span className="text-xs text-gold-300 p-2">{player.pronouns.join('/')}</span>
      </div>

      <div className="card-badge">
        {/*{Player Derby Number Badge}*/}
        <span>
              #{player.derbyNumber}
            </span>
      </div>

      <div className="card-social">
        {/*{Player Social media}*/}
        {player.socials && (
            <div className="card-social">
              {Object.keys(player.socials).map((social) => (
                <a
                  href={social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  key={social}
                >
                  <FontAwesomeIcon
                    icon={socialMediaMap[social as keyof typeof socialMediaMap]}
                    color="purple"
                    className="card-social-icon"
                  />
                </a>
              ))}
            </div>
          )}
      </div>

    </div>
  );
};

export default PlayerCardB;