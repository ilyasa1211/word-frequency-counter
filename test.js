import { Word } from "./dist/index.mjs";

const argv = process.argv.slice(2);

const word =
  "The concept of time dilation in physics is fascinating. It refers to the difference in the passage of time between observers in different gravitational fields or moving at different speeds. This phenomenon has been verified by experiments and is a key principle in theories like Einstein's theory of relativity.\"";


testSpecificWord();
testAllWord(word);


function testSpecificWord(word = argv[argv.indexOf("--word") + 1]) {
  console.log(new Word(word).getWordFrequency(["in", "different", "between"]));
}

function testAllWord(word = argvWord) {
  console.log(new Word(word).getWordFrequency());
}
