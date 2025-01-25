import React from 'react';
import { Paper, Title, Table, Badge, Stack } from '@mantine/core';
import { Player, GameHistory } from '@/types/game';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';
import styles from '../FootballGhost.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

type StatisticsProps = {
  players: Player[];
  gameHistory: GameHistory;
  totalGames: number;
}

const Statistics = ({ players, gameHistory, totalGames }: StatisticsProps) => {
  const playerStats = players.reduce((acc, player) => {
    const existingPlayer = acc[player.id] || {
      id: player.id,
      name: player.name,
      number: player.number,
      totalScore: 0,
      totalPasses: 0,
      gamesPlayed: 0
    };

    acc[player.id] = {
      ...existingPlayer,
      totalScore: existingPlayer.totalScore + player.score,
      totalPasses: existingPlayer.totalPasses + player.successfulPasses,
      gamesPlayed: existingPlayer.gamesPlayed + 1
    };

    return acc;
  }, {} as Record<number, any>);

  const finalStats = Object.values(playerStats)
    .map(player => ({
      ...player,
      averageScore: player.totalScore / player.gamesPlayed,
      averagePasses: player.totalPasses / player.gamesPlayed
    }))
    .sort((a, b) => b.averageScore - a.averageScore);

  const techniqueCounts = gameHistory.techniques.reduce((acc, technique) => {
    acc[technique] = (acc[technique] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(techniqueCounts),
    datasets: [
      {
        label: 'Times Used',
        data: Object.values(techniqueCounts),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Paper className={styles.statistics}>
      <Stack>
        <Title order={2} c="white">Final Results ({totalGames} Games)</Title>

        <div>
          <Title order={3} mb="md">Xếp hạng</Title>
          <Table withTableBorder withColumnBorders striped horizontalSpacing="md"
            styles={{
              th: {
                textAlign: 'center',
                fontWeight: '600',
              },
              td: {
                textAlign: 'center',
              },
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Rank</Table.Th>
                <Table.Th>Player</Table.Th>
                <Table.Th>Average Score</Table.Th>
                <Table.Th>Total Score</Table.Th>
                <Table.Th>Average Passes</Table.Th>
                <Table.Th>Games Played</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {finalStats.map((player, index) => (
                <Table.Tr key={player.id} style={{
                  backgroundColor: index < 3 ? 'rgba(255, 223, 0, 0.1)' : undefined,
                  fontWeight: index < 3 ? 'bold' : undefined
                }}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    <div className='flex gap-2 items-center justify-center'>
                      {player.name} (#{player.number})
                      {index < 3 && (
                        <Badge color="yellow">TOP {index + 1}</Badge>
                      )}
                    </div>
                  </Table.Td>
                  <Table.Td>{player.averageScore.toFixed(2)}</Table.Td>
                  <Table.Td>{player.totalScore}</Table.Td>
                  <Table.Td>{player.averagePasses.toFixed(2)}</Table.Td>
                  <Table.Td>{player.gamesPlayed}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>

        <div>
          <Title order={3} mb="md">Most Used Techniques</Title>
          <div style={{ height: '400px' }}>
            <Bar 
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                    text: 'Technique Usage Statistics'
                  },
                },
              }}
            />
          </div>
        </div>
      </Stack>
    </Paper>
  );
};

export default Statistics; 