export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  species: {
    url: string;
  };
  stats: stat[];
  types: type[];
};

type stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type type = {
  type: {
    name: string;
  };
};
