import { PlayerGetByGroup } from "./playersGetByGroup";

export async function PlayerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await PlayerGetByGroup(group);
    const players = storage.filter((player) => player.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}
