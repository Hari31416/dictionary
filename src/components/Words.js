import Word from "./Word";

const words = require("../data/final_detailed_dict.json");

// Create a new component
const Words = (props) => {
  // Return the word
  return (
    <div className="Words row">
      <h2 className="word-counts ">Total words: {words.length}</h2>
      {words.map((word, i) => (
        <Word key={i} word={word} />
      ))}
    </div>
  );
};

// Export the component
export default Words;
