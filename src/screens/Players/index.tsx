import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Alert, FlatList } from "react-native";
import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { AppError } from "@utils/AppError";
import { PlayerAddByGroup } from "@storage/player/playerAddByGroup";
import { PlayerGetByGroup } from "@storage/player/playersGetByGroup";

type RouteParams = { group: string };

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "informe o nome da pessoa para adicionar"
      );
    }
    const newPlayer = {
      name: newPlayerName,
      team: team,
    };
    try {
      await PlayerAddByGroup(newPlayer, group);
      const players = await PlayerGetByGroup(group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Pessoa", "Não foi possivel adicionar");
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <HighLight title={group} subtitle="Adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Nome da Pessoa" onChangeText={setNewPlayerName} />
        <ButtonIcon icon="add" onPress={() => handleAddPlayer()} />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não existe pessoas neste time" />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
