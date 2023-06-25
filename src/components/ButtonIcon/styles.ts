import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {} from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";
type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 56px;
  width: 56px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled;
