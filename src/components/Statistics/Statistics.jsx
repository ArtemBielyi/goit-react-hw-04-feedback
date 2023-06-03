import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statisticsContainer}>
      <p className={styles.statisticItem}>Good: {good}</p>
      <p className={styles.statisticItem}>Neutral: {neutral}</p>
      <p className={styles.statisticItem}>Bad: {bad}</p>
      <p className={styles.statisticItem}>Total: {total}</p>
      <p className={styles.statisticItem}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
