export const Feedback = ({ value, totalFeedback, totalResult }) => {
  return (
    <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {totalResult}%</p>
    </div>
  );
};
