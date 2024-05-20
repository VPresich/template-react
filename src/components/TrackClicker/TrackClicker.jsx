import Button from "../Button/Button";
const TrackClicker = ({ value, onClicker, children }) => {
  return (
    <Button onClick={onClicker}>
      {children}: {value}
    </Button>
  );
};

export default TrackClicker;
