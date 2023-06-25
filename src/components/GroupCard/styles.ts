import styled, { css } from "styled-components/native";
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
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
export const Icons = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  name: "account-group",
  size: 32,
  color: theme.COLORS.GREEN_700,
}))`
  margin-right: 20px;
`;
