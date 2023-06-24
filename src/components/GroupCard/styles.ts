import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
export const Icons = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  name: "account-group",
  size: 32,
  color: theme.COLORS.GREEN_700,
}))`
  margin-right: 20px;
`;
