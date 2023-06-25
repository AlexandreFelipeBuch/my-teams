import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ title, type = "PRIMARY", ...rest }: Props) {
  return <Container></Container>;
}
