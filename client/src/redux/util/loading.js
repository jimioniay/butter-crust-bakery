const loading = (type, status) => {
  return {
    type: `${type}_LOADING`,
    status,
  };
};
export default loading;
