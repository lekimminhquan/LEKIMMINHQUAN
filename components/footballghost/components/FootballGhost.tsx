'use client'
import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { TOTAL_PLAYERS, TECHNIQUES_PER_PLAYER } from '@/components/constant/techniques';
import { Player, GameState } from '@/types/game';
import { getRandomInt, getRandomTechniques, checkPassSuccess, calculateFinalScore } from '@/public/utils/gameUtils';
import PlayerForm from '../components/PlayerForm';
import GameBoard from '../components/GameBoard';
import Statistics from '../components/Statistics';
import styles from '../FootballGhost.module.scss';

const FootballGhost = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentGameNumber, setCurrentGameNumber] = useState(1);
  const [finalResults, setFinalResults] = useState<Player[]>([]);

  const initializeGame = (inputPlayers: Player[]) => {
    const initializedPlayers = inputPlayers.map(player => ({
      ...player,
      defense: getRandomInt(1, 5),
      techniques: getRandomTechniques(TECHNIQUES_PER_PLAYER),
      penaltyOrder: null,
      score: 0,
      successfulPasses: 0
    }));

    const firstHolder = initializedPlayers[getRandomInt(0, TOTAL_PLAYERS - 1)];
    const firstPenalizedIndex = getRandomInt(0, TOTAL_PLAYERS - 2);
    const firstPenalized = initializedPlayers.filter(p => p.id !== firstHolder.id)[firstPenalizedIndex];

    const updatedPlayers = initializedPlayers.map(player => {
      if (player.id === firstPenalized.id) {
        return { ...player, penaltyOrder: 1 };
      }
      return player;
    });

    setGameState({
      players: updatedPlayers,
      currentHolder: firstHolder,
      currentPenalized: firstPenalized,
      round: 1,
      gameHistory: {
        techniques: [],
        passes: []
      },
      isGameOver: false,
      penaltyCount: 1
    });
    setGameStarted(true);
  };

  const playTurn = () => {
    if (!gameState || gameState.isGameOver) return;

    const availablePlayers = gameState.players.filter(
      p => p.penaltyOrder === null && p.id !== gameState.currentHolder?.id
    );

    if (availablePlayers.length === 0) {
      const finalPlayers = gameState.players.map(player => ({
        ...player,
        score: calculateFinalScore(player)
      }));

      if (currentGameNumber < 10) {
        setFinalResults(prev => [...prev, ...finalPlayers]);
        setCurrentGameNumber(prev => prev + 1);
        initializeGame(gameState.players.map(p => ({
          ...p,
          penaltyOrder: null,
          score: 0,
          successfulPasses: 0
        })));
      } else {
        setGameState(prev => prev ? { ...prev, isGameOver: true } : null);
        setFinalResults(prev => [...prev, ...finalPlayers]);
      }
      return;
    }

    const receiver = availablePlayers[getRandomInt(0, availablePlayers.length - 1)];
    const technique = gameState.currentHolder!.techniques[
      getRandomInt(0, TECHNIQUES_PER_PLAYER - 1)
    ];

    const isSuccess = checkPassSuccess(
      technique.difficulty,
      receiver.defense
    );

    const updatedPlayers = gameState.players.map(player => {
      if (player.id === gameState.currentHolder?.id) {
        if (isSuccess) {
          return {
            ...player,
            successfulPasses: player.successfulPasses + 1
          };
        } else if (player.penaltyOrder === null) {
          return {
            ...player,
            penaltyOrder: gameState.penaltyCount + 1
          };
        }
      }
      return player;
    });

    setGameState(prev => {
      if (!prev) return null;
      return {
        ...prev,
        players: updatedPlayers,
        currentHolder: isSuccess ? receiver : prev.currentPenalized,
        currentPenalized: isSuccess ? prev.currentPenalized : prev.currentHolder,
        round: prev.round + 1,
        penaltyCount: isSuccess ? prev.penaltyCount : prev.penaltyCount + 1,
        gameHistory: {
          techniques: [...prev.gameHistory.techniques, technique.name],
          passes: [
            ...prev.gameHistory.passes,
            {
              from: prev.currentHolder!,
              to: receiver,
              technique,
              success: isSuccess
            }
          ]
        }
      };
    });
  };

  return (
    <div className={styles.container}>
      <Container size="xl">
        {!gameStarted ? (
          <PlayerForm 
            onSubmit={initializeGame} 
            totalPlayers={TOTAL_PLAYERS} 
          />
        ) : (
          <>
            <GameBoard 
              gameState={gameState!} 
              onPlayTurn={playTurn}
              currentGame={currentGameNumber} 
            />
            {gameState?.isGameOver && (
              <Statistics 
                players={finalResults}
                gameHistory={gameState.gameHistory}
                totalGames={10}
              />
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default FootballGhost;