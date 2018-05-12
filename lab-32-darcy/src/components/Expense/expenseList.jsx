import React from 'react';
import {connect} from 'react-redux';

import Expense from './expense.jsx';

import {
  expenseCreate,
} from '../../actions/expenseAction.js';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAll = this.displayAll.bind(this);
  }

  displayAll() {
    return this.props.categories.map(category => {
      return <Expense 
        key={category.id} 
        id={category.id}
        name={category.name}  
        budget={category.budget}
        isEditing={category.isEditing} />;
    });
  }

  render() {
    return (
      <div id="budget-list">
        {this.displayAll()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: value => dispatch(expenseCreate(value)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);