import Meaning from "./Meaning";
import React, { useState } from "react";

const Word = (props) => {
  //   var current = 1;
  const [load, setload] = useState(false);
  const [meaning, setMeaning] = useState(props.word.First);
  const [current, setCurrent] = useState(2);
  function showBtn() {
    setload(!load);
  }
  function nextMeaning(params) {
    setCurrent((current % 5) + 1);
    const numToWord = {
      1: props.word.First,
      2: props.word.Second,
      3: props.word.Third,
      4: props.word.Fourth,
      5: props.word.Fifth,
    };
    if (numToWord[current] === "Oops! So Empty!") {
      setCurrent(2);
      setMeaning(numToWord[1]);
    } else {
      setMeaning(numToWord[current]);
    }
  }
  var v = load ? "Hide Meaning" : "Show Meaning";
  return (
    <div className="word-wrapper">
      <div className="word-btns col-sm-6 col-lg-4 col-md-5">
        <h5 className="d-inline m-2 word">{props.word.Word}</h5>

        <button className="btn btn-primary show-btn ms-2" onClick={showBtn}>
          {v}
        </button>
        {load ? (
          <button
            className="btn btn-secondary next-btn ms-2"
            onClick={nextMeaning}
          >
            Next
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <Meaning first={meaning} load={load} />
    </div>
  );
};

export default Word;
