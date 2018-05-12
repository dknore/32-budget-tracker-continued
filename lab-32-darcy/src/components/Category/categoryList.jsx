import React from 'react';
import {connect} from 'react-redux';

import Category from './category.jsx';

import {
  categoryCreate,
} from '../../actions/categoryAction.js';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAll = this.displayAll.bind(this);
  }

  displayAll() {
    return this.props.categories.map(category => {
      return <Category 
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
    categoryCreate: value => dispatch(categoryCreate(value)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);