import React from 'react';
import {connect} from 'react-redux';

import {
  update,
  remove
} from '../../actions/expenseAction.js';

import ExpenseForm from './expenseForm.jsx';

class Expense extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleUpdateOff = this.toggleUpdateOff.bind(this);
  }

  handleRemove(event, id) {
    event.preventDefault();
    this.props.expenseRemove(this.props.id);
  }

  toggleUpdate() {
    event.preventDefault();
    this.props.expenseUpdate({
      name: this.props.name,
      budget: this.props.budget,
      id: this.props.id,
      isEditing: true,
    });
  }

  toggleUpdateOff() {
    event.preventDefault();
    this.props.expenseUpdate({
      isEditing: false,
      name: this.props.name,
      budget: this.props.budget,
      id: this.props.id,
    });

  }

  render() {
    if (this.props.isEditing === true) {
      return ( 
        <div>
          <ExpenseForm id={this.props.id} 
            mode="update"
            name={this.props.name} 
            budget={this.props.budget} />
          <button id="cancel-button" onClick={this.toggleUpdateOff}> Cancel </button>
        </div>
      );
    }
    return (
      <li>
        {this.props.name}: ${this.props.budget}
        <button onClick={this.handleRemove}> Remove </button>
        <button onClick={this.toggleUpdate}> Update </button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (category) => dispatch(expenseUpdate(category)),
    expenseRemove: (id) => dispatch(expenseRemove(id)),
  };
};

export default connect(null, mapDispatchToProps)(Expense);