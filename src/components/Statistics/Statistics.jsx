import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsColor } from './StatisticsColor';

export const Statistics = ({ events }) => {
  return (
    <ul className={css.statList}>
      {events.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          id={id}
          style={{ backgroundColor: StatisticsColor() }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
