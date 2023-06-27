import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  width: 100%;
  height: 56px;
  border-radius: 6px;
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
`;
export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`;
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
