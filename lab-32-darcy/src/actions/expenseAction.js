export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export function categoryCreate(value) {
  return {type: EXPENSE_CREATE, value: value};
}

export function categoryUpdate(category) {
  return {type: EXPENSE_UPDATE, category: category};
}

export function categoryRemove(id) {
  return {type: EXPENSE_REMOVE, id};
}