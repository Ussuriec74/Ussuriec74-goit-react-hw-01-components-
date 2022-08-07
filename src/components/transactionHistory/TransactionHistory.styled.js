import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: ${p => p.theme.space[9]}px;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[6]}px;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr``;

export const TableHeadColumn = styled.th`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgTableHead};
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[0]};
`;

export const TableBody = styled.tbody`
  color: ${p => p.theme.colors.secondaryText};
  background-color: ${p => p.theme.colors.white};
`;
export const TableBodyRow = styled.tr``;

export const TableBodyColumn = styled.th`
  text-align: center;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[0]};
`;