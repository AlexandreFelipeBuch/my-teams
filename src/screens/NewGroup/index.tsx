import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova Turma"
          subtitle=" Crie uma turma para adicionar as pessoas"
        />
        <Input />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
