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
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableBodyColumn>{type}</TableBodyColumn>
            <TableBodyColumn>{amount}</TableBodyColumn>
            <TableBodyColumn>{currency}</TableBodyColumn>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};