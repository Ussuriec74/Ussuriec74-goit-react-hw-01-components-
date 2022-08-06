import styled from "styled-components";

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: ${p => p.theme.space[3]}px;
  width: calc(100% / 3);
  height: ${p => p.theme.sizes.xl};
  background-color: ${p => p.theme.colors.bgStats};
`;

export const StatsLabel = styled.span`
  font-weight: ${p => p.theme.fontWeights.accent};
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatsQquantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;