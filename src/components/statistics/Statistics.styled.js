import styled from "styled-components";
import { getRandomHexColor } from '../../rondomColor';



export const StatsTitle = styled.h2`
  text-align: center;
  padding: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.secondaryText};
  background-color: ${ p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc( 100% / 5 );
  gap: 8px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${ getRandomHexColor };
  color: ${ p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};

`;

export const StatsItemlabel = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StatsItemValue = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
`