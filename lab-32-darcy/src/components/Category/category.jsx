import React from 'react';
import {connect} from 'react-redux';

import {
  categoryUpdate,
  categoryRemove
} from '../../actions/categoryAction.js';

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
    this.props.categoryRemove(this.props.id);
  }

  toggleUpdate() {
    event.preventDefault();
    this.props.categoryUpdate({
      name: this.props.name,
      budget: this.props.budget,
      id: this.props.id,
      isEditing: true,
    });
  }

  toggleUpdateOff() {
    event.preventDefault();
    this.props.categoryUpdate({
      name: this.props.name,
      budget: this.props.budget,
      id: this.props.id,
      isEditing: false,
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
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryRemove: (id) => dispatch(categoryRemove(id)),
  };
};

export default connect(null, mapDispatchToProps)(Category);