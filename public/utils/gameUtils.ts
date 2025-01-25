import { TECHNIQUES } from '@/components/constant/techniques';
import { Player, Technique } from '@/types/game';

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomTechniques = (count: number): Technique[] => {
  const shuffled = [...TECHNIQUES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const checkPassSuccess = (
  techniqueScore: number, 
  defenseScore: number
): boolean => {
  const defensiveRatio = defenseScore / (techniqueScore + defenseScore);
  return Math.random() < defensiveRatio ? false : true;
};

export const calculateFinalScore = (player: Player): number => {
  if (player.penaltyOrder === null) {
    return 0;
  }
  return (10 - player.penaltyOrder) + 
         (player.successfulPasses * player.techniques[0].difficulty);
};