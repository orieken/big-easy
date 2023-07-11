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
import { PlayerCardProps } from '@rieken/app/components/player-card-props.type';

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
    <div className="card shadow-glow hover:shadow-hover transition-shadow duration-200 ease-in-out">
      {/*{Player Image}*/}
      <Image
        src={player.imageUrl}
        alt={player.name}
        className="w-full object-cover"
      />
      <div className="text-center flex flex-col md:flex-row justify-center items-center">
        <span className="text-sm font-bold text-gold md:mr-2">{player.name}</span>
        <span className="p-2 text-xs text-gold-300 md:ml-2 md:p-o">{player.pronouns.join('/')}</span>
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