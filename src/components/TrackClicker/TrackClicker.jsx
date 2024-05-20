const TrackClicker = ({ value, onClicker, children }) => {
  return (
    <button onClick={onClicker}>
      {children}: {value}
    </button>
  );
};

export default TrackClicker;
