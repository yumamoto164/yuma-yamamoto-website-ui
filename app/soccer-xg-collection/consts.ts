export const MAX_PLAYERS_ENTRY = 20;

export const DEFAULT_PLAYER = {
  number: "",
  name: "",
};

export const createDefaultPlayerList = () => {
  return Array.from({ length: MAX_PLAYERS_ENTRY }, (_, index) => ({
    index,
    ...DEFAULT_PLAYER,
  }));
};
