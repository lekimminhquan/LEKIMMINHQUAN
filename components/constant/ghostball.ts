export type Technique = {
  name: string;
  difficulty: number;
}

export type Player = {
  name: string;
  number: number;
  defense: number; 
  techniques: Technique[]; 
  penaltyOrder: number | null; 
  score: number;
  successfulPasses: number;
}

export type GameState = {
  players: Player[];
  currentHolder: Player;
  currentPenalized: Player;
  round: number;
  gameHistory: {
    techniques: string[]; 
    passes: {
      from: Player;
      to: Player;
      technique: Technique;
      success: boolean;
    }[];
  };
}
