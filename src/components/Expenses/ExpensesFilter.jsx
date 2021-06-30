import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { onFChangeExpenses, selected } = props;

  const selectFilterHandler = (e) => {
    const year = e.target.value;
    onFChangeExpenses(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={selectFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
