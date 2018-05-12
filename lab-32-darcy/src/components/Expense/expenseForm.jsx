import React from 'react';
import { connect } from 'react-redux';

import {
  expenseCreate,
  expenseUpdate,
} from '../../actions/expenseAction.js';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.mode === 'create') {
      this.props.expenseCreate(this.state);
      this.setState({
        name: '',
        budget: '',
      });
    } else if (this.props.mode === 'update') {
      let newValue = Object.assign(this.state, { 
        isEditing: false, 
        name:this.state.name, 
        budget:this.state.budget, 
        id:this.props.id});
      this.props.expenseUpdate(newValue);
    }
  }

  handleNameChange(event) {
    let newState = {
      name: event.target.value
    };
    this.setState(newState);
  }

  handleBudgetChange(event) {
    let newState = {
      budget: event.target.value
    };
    this.setState(newState);
  }

  render() {
    return <form id="add-cat" onSubmit={this.handleSubmit}>
      <input
        onChange={this.handleNameChange}
        name="name"
        type="text"
        placeholder="Category"
        required="true"
        value={this.state.name}
      />

      <input
        onChange={this.handleBudgetChange}
        name="budget"
        type="text"
        placeholder="Budget"
        required="true"
        value={this.state.budget}
      />

      <button type="submit"> Add Category </button>
    </form>;
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
    expenseUpdate: value => dispatch(expenseUpdate(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);