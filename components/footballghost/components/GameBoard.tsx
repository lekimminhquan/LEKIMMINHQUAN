import React from 'react';
import { Paper, Group, Text, Button, Stack, Badge, Progress } from '@mantine/core';
import { GameState } from '@/types/game';
import styles from '../FootballGhost.module.scss';

type GameBoardProps = {
  gameState: GameState;
  onPlayTurn: () => void;
  currentGame: number;
}

const GameBoard = ({ gameState, onPlayTurn, currentGame }: GameBoardProps) => {
  const activePlayers = gameState.players.filter(p => p.penaltyOrder === null);
  const penalizedPlayers = gameState.players
    .filter(p => p.penaltyOrder !== null)
    .sort((a, b) => (a.penaltyOrder || 0) - (b.penaltyOrder || 0));

  return (
    <Paper className={styles.gameBoard}>
      <Stack gap="md">
        <Group align="center">
          <Stack gap={5}>
            <Text color="white" size="xl">Game {currentGame} of 10</Text>
            <Text color="white" size="md">Round: {gameState.round}</Text>
          </Stack>
          <Button 
            onClick={onPlayTurn} 
            disabled={gameState.isGameOver}
            color="green"
          >
            Play Turn
          </Button>
        </Group>

        <Progress 
          value={currentGame * 10} 
          size="xl" 
          color="blue"
          radius="lg"
          striped 
          animated
        />

        <div>
          <Text color="white" fw={500}>Current Ball Holder:</Text>
          <Badge size="xl" color="green">
            {gameState.currentHolder?.name} (#{gameState.currentHolder?.number})
          </Badge>
        </div>

        <div>
          <Text color="white" fw={500}>Currently Penalized:</Text>
          <Badge size="xl" color="red">
            {gameState.currentPenalized?.name} (#{gameState.currentPenalized?.number})
          </Badge>
        </div>

        <div>
          <Text color="white" fw={500}>Active Players:</Text>
          <Group>
            {activePlayers.map(player => (
              <Badge key={player.id} size="lg">
                {player.name} (#{player.number})
              </Badge>
            ))}
          </Group>
        </div>

        <div>
          <Text color="white" fw={500}>Penalty Order:</Text>
          <Group>
            {penalizedPlayers.map(player => (
              <Badge key={player.id} size="lg" color="red">
                {player.penaltyOrder}. {player.name}
              </Badge>
            ))}
          </Group>
        </div>

        <div>
          <Text color="white" fw={500}>Last Pass:</Text>
          {gameState.gameHistory.passes.length > 0 && (
            <Text color="white">
              {gameState.gameHistory.passes[gameState.gameHistory.passes.length - 1].from.name} 
              → 
              {gameState.gameHistory.passes[gameState.gameHistory.passes.length - 1].to.name}
              {' '}
              ({gameState.gameHistory.passes[gameState.gameHistory.passes.length - 1].technique.name})
              {' '}
              {gameState.gameHistory.passes[gameState.gameHistory.passes.length - 1].success ? 
                '✅' : '❌'}
            </Text>
          )}
        </div>
      </Stack>
    </Paper>
  );
};

export default GameBoard; 