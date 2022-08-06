import PropTypes from 'prop-types';
import { StatsItem, StatsLabel, StatsQquantity } from 'components/stats/Stats.styled';

export const Stats = ({ label, quantity }) => {
  return (
    <StatsItem>
      <StatsLabel>{label}</StatsLabel>
      <StatsQquantity>{quantity}</StatsQquantity>
    </StatsItem>
  );
};

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};