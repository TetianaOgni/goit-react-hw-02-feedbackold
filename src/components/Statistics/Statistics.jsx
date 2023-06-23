import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ bad, neutral, good, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <div className={css.statisticsList}>
        <p className={css.statisticsItem}>Good: {good}</p>
        <p className={css.statisticsItem}>Neutral: {neutral}</p>
        <p className={css.statisticsItem}>Bad: {bad}</p>
      </div>
      <div className={css.statisticsResultsList}>
        <p className={css.statisticsResultsItem}>Total: {total}</p>
        <p className={css.statisticsResultsItem}>
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
