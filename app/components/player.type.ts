import { Pronouns } from '@rieken/app/components/pronouns.type';

export type Player = {
  name: string;
  imageUrl: string;
  derbyNumber: number;
  url: string;
  status: string;
  pronouns: Pronouns[];
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    youtube?: string;
    twitch?: string;
  }
}
