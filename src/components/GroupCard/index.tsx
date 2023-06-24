import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icons } from "./styles";
type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icons />
      <Title>{title}</Title>
    </Container>
  );
}
