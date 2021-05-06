export default ({ dispatch, getState }) => next => action => {
  console.group(action.type);
  console.log('The action is', action);
  const result = next(action);
  console.log('The state is', getState());
  console.groupEnd();
  return result;
};
