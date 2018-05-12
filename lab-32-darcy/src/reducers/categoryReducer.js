import uuid from 'uuid';

import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
} from '../actions/categoryAction.js';

const initialState = {
  categories: []
};

export default function categoryReducer(state = initialState, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentCategories;
  let categoryIndex;
  let newCategory;
  let catRemove;
  let toUpdate;

  switch (action.type) {
  
  case CATEGORY_CREATE:
    currentCategories = state.categories.slice();
    
    newCategory = Object.assign({}, {timestamp: Date.now(), id: uuid(), isEditing: false}, action.value);
    console.log('newCategory= ', newCategory);
    currentCategories.push(newCategory);
    return Object.assign(newState, state, {categories: currentCategories});

  case CATEGORY_UPDATE:
    currentCategories = state.categories.map(cat => {
      if (cat.id === action.category.id) {
        return action.category;
      } else {
        return cat;
      }
    });
    return Object.assign(newState, state, {categories: currentCategories});

  case CATEGORY_REMOVE:
    currentCategories = state.categories.slice();
    
    catRemove = currentCategories.find(cat => {
      return cat.id === action.id;
    });
    categoryIndex = currentCategories.indexOf(catRemove);
    currentCategories.splice(categoryIndex, 1);
    return Object.assign(newState, state, {categories: currentCategories});
  
  default: return state;
  }
}