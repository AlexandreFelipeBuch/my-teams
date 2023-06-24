import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;
export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;
export const BackIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  name: "chevron-left",
  size: 36,
  color: theme.COLORS.WHITE,
}))``;
