import React from 'react';
import {connect} from 'react-redux';

import Category from './category.jsx';

import {
  create,
} from '../actions/actions.jsx';

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
    create: value => dispatch(create(value)),
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);