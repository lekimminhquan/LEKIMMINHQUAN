import React, { useState } from 'react';
import { TextInput, NumberInput, Button, Stack, Group, Title, Paper, Notification, Text } from '@mantine/core';
import { Player } from '@/types/game';
import styles from '../FootballGhost.module.scss';

type PlayerFormProps = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (players: any) => void;
  totalPlayers: number;
}

const PlayerForm = ({ onSubmit, totalPlayers }: PlayerFormProps) => {
  const [players, setPlayers] = useState<Player[]>(
    Array(totalPlayers).fill(null).map((_, index) => ({
      id: index,
      name: '',
      number: 0,
      defense: 0,
      techniques: [],
      penaltyOrder: null,
      score: 0,
      successfulPasses: 0
    }))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (players.some(p => !p.name || !p.number)) {
      <Notification title="Error" color="red" >
        <Text size="sm" fw={500} c="black">Please fill all fields</Text>
      </Notification>;
      return;
    }
    onSubmit(players);
  };

  const handleChange = (index: number, field: 'name' | 'number', value: any) => {
    const newPlayers = [...players];
    newPlayers[index] = {
      ...newPlayers[index],
      [field]: field === 'number' ? parseInt(value) : value
    };
    setPlayers(newPlayers);
  };

  return (
    <Paper className={styles.formContainer} p="xl" radius="md">
      <form onSubmit={handleSubmit}>
        <Stack>
          <Title order={2} c="white">
            Enter Player Information
          </Title>
          
          {players.map((player, index) => (
            <Group key={index} grow>
              <TextInput
                required
                label={`Player ${index + 1} Name`}
                placeholder="Enter name"
                value={player.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                styles={{
                  label: { color: 'white' },
                  input: { backgroundColor: 'rgba(255,255,255,0.9)' }
                }}
              />
              <NumberInput
                required
                label="Jersey Number"
                placeholder="Enter number"
                min={1}
                max={99}
                value={player.number}
                onChange={(val) => handleChange(index, 'number', val)}
                styles={{
                  label: { color: 'white' },
                  input: { backgroundColor: 'rgba(255,255,255,0.9)' }
                }}
              />
            </Group>
          ))}

          <Button 
            type="submit" 
            color="green" 
            size="lg"
            fullWidth
          >
            Start Game
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default PlayerForm;