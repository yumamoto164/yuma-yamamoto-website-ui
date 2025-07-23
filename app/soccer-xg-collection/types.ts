export type TeamEntryType = {
  homeTeam: {
    teamName: string;
    players: PlayerEntryType[];
  };
  awayTeam: {
    teamName: string;
    players: PlayerEntryType[];
  };
};

export type PlayerEntryType = {
  index: number;
  number: string;
  name: string;
};
