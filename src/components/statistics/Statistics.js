import PropTypes from 'prop-types';
import { Box } from '../Box';
import { StatsTitle, StatsItem, StatsItemlabel, StatsItemValue } from './Statistics.styled';

export const Statistics = ({title, stats }) => {
  return (
    <Box mx="auto" my="64px" width="320px" alignItems="center" textAlign="center">
      {title && <StatsTitle>{title}</StatsTitle>}

      <Box as="ul" display="flex" alignItems="center">
        {stats.map(({id, label, percentage}) => (
          <StatsItem key={id}>
            <StatsItemlabel>{label}</StatsItemlabel>
            <StatsItemValue>{percentage}%</StatsItemValue>
          </StatsItem>
        ))}
      </Box>
    </Box>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};