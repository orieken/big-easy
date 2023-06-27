import Image from 'next/image';
import { Inter } from 'next/font/google';
import PlayerCardB from '@rieken/app/components/player-card-b';
import players from '@rieken/app/components/players';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  let playersBlist: JSX.Element[] = players.map((player, index) => {
    return (
      <div key={index}>
        <PlayerCardB player={player}/>
      </div>
    );
  });

  return (
    <main className="px-16 py-6">
      <div className="flex flex-wrap justify-between items-center">
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Big Easy Roller Derby</h2>
        <h3 className="text-2xl font-semibold">Roster</h3>
      </header>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {playersBlist}
      </div>
    </main>
  );
}
