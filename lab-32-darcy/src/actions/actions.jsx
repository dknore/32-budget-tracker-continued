export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export function create(value) {
  return {type: CREATE, value: value};
}

export function update(category) {
  return {type: UPDATE, category: category};
}

export function remove(id) {
  return {type: REMOVE, id};
}