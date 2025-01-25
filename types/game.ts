export type Technique = {
  name: string;
  difficulty: number;
}

export type Player = {
  id: number;
  name: string;
  number: number;
  defense: number;
  techniques: Technique[];
  penaltyOrder: number | null;
  score: number;
  successfulPasses: number;
}

export type Pass = {
  from: Player;
  to: Player;
  technique: Technique;
  success: boolean;
}

export type GameHistory = {
  techniques: string[];
  passes: Pass[];
}

export type GameState = {
  players: Player[];
  currentHolder: Player | null;
  currentPenalized: Player | null;
  round: number;
  gameHistory: GameHistory;
  isGameOver: boolean;
  penaltyCount: number;
} 