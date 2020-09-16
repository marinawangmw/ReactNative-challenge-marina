export enum Filter {
  characters = 'characters',
  locations = 'locations',
  episodes = 'episodes',
}

export interface Characters {
  id: number;
  name: string;
  type?: string;
  species?: string;
  gender?: string;
  image?: string;
}

export interface Locations {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
  residents?: {name: string; image: string}[];
}

export interface Episodes {
  id: number;
  name: string;
  air_date?: Date;
  episode?: string;
  characters?: {name: string; image: string}[];
}

export type Data = Characters | Locations | Episodes;
