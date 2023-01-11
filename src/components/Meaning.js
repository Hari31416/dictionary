const Meaning = (props) => {
  var classes = props.load ? "meaning" : "hidden meaning";
  return (
    <div>
      <p className={classes}>{props.first}</p>
    </div>
  );
};

export default Meaning;
