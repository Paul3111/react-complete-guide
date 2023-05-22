import ExpenseItem from "./components/ExpenseItem";

function App() {
  // Adding a paragraph using JS
  // const paragraph = document.createElement('p');
  // paragraph.textContent = 'This is inserted using JS';
  // document.getElementById('root').appendChild(paragraph);
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
