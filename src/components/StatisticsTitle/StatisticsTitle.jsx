import PropTypes from 'prop-types';
import css from './StatisticsTitle.module.css';

export const StatisticsTitle = ({ text }) => {
  return text && <h2 className={css.title}>{text}</h2>;
};

StatisticsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
