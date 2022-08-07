import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr``;

export const TableHeadColumn = styled.th`
  background-color: ${p => p.theme.colors.bgTableHead};
  py: ${p => p.theme.space[4]}px;
  px: ${p => p.theme.space[0]};
`;

export const TableBody = styled.tbody``;
export const TableBodyColumn = styled.tr``;

export const TableBodyRow = styled.th`
  text-align: center;
  py: ${p => p.theme.space[4]}px;
  px: ${p => p.theme.space[0]};
`;