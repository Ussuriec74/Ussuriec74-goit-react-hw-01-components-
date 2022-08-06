import styled from "styled-components";

export const FriendStatus = styled.span`
  display: inline-block;
  margin: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.m};
  height: ${p => p.theme.sizes.m};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ status }) => (status ? '#00b300' : '#ff0000')};
`;

export const FriendImg = styled.img`
  margin-right: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  backgraund: ${p => p.theme.colors.bgStats};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.accent};
  color: ${p => p.theme.colors.black};
`;