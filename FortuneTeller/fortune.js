let question = prompt("Ask a question");

const answer = [
  "Unlikely",
  "Likely",
  "I dont care",
  "Please ask at a later time",
  "Unknown",
];
const randomAnswer = Math.floor(Math.random() * answer.length) % answer.length;

if (answer != null) {
  alert(answer[randomAnswer]);
} else {
  alert("Please ask a question");
}