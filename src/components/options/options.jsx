export const Options = ({ updateFeedback, totalFeedback }) => {
  if (totalFeedback > 0) {
    return (
      <div>
        <button
          className="option-button"
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          className="option-button"
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button className="option-button" onClick={() => updateFeedback("bad")}>
          Bad
        </button>
        <button
          className="option-button"
          onClick={() => updateFeedback("reset")}
        >
          Reset
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="option-button"
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
        <button
          className="option-button"
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
        <button className="option-button" onClick={() => updateFeedback("bad")}>
          Bad
        </button>
      </div>
    );
  }
};
