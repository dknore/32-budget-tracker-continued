import React from 'react';
import {connect} from 'react-redux';

import {
  update,
  remove
} from '../actions/actions.jsx';

import CategoryForm from './categoryForm.jsx';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleUpdateOff = this.toggleUpdateOff.bind(this);
  }

  handleRemove(event, id) {
    event.preventDefault();
    this.props.remove(this.props.id);
  }

  toggleUpdate() {
    event.preventDefault();
    this.props.update({
      name: this.props.name,
      budget: this.props.budget,
      id: this.props.id,
      isEditing: true,
    });
  }

  toggleUpdateOff() {
    event.preventDefault();
    this.props.update({
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
          <CategoryForm id={this.props.id} 
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
    update: (category) => dispatch(update(category)),
    remove: (id) => dispatch(remove(id)),
  };
};

export default connect(null, mapDispatchToProps)(Category);