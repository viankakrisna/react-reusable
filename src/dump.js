export const dump = variable => {
  try {
    return JSON.stringify(variable, null, 2);
  } catch (e) {}
};
export default dump;
