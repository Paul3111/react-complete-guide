import './ExpenseItem.css'

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 5, 28); // the date between () is the default date
  // const expenseTitle = "Car insurance";
  // const expenseAmount = 249.67;

  return (
  <div className="expense-item">
    <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
  </div>
  );
};

export default ExpenseItem;