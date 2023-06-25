import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <HighLight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Button title="Criar" />
      <ButtonIcon />
    </Container>
  );
}
