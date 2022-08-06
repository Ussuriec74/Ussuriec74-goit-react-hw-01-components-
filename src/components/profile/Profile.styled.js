import styled from "styled-components";

export const ProfileWrapper = styled.div`
  text-align: center;
  width: ${p => p.theme.sizes.xxl};
  margin: 0 auto;
  margin-top: ${p => p.theme.space[6]}px;
  border: ${p => p.theme.borders.normal} #BCBEC0;
  border-radius: ${p => p.theme.radii.normal};
`;

export const DescriptionWrapper = styled.div`
  text-align: center;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.white}
`;

export const Avatar = styled.img`
  width: ${p => p.theme.sizes.full};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.bgBody};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.accent};
  color: ${p=> p.theme.colors.secondaryText};
`;

export const UserStats = styled.ul`
  background-color: ${p => p.theme.colors.bgStats};
`;

