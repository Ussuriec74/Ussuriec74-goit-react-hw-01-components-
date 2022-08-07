import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableHeadRow,
  TableHeadColumn,
  TableBody,
  TableBodyColumn,
  TableBodyRow,
} from 'components/transactionHistory/TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableHeadRow>
          <TableHeadColumn>Type</TableHeadColumn>
          <TableHeadColumn>Amount</TableHeadColumn>
          <TableHeadColumn>Currency</TableHeadColumn>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(({id, type, amount, currency}) => (
          <TableBodyColumn key={id}>
            <TableBodyRow>{type}</TableBodyRow>
            <TableBodyRow>{amount}</TableBodyRow>
            <TableBodyRow>{currency}</TableBodyRow>
          </TableBodyColumn>
        ))}
      </TableBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )),
};