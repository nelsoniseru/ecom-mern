// Convert the number to a formatted string
export const addCurrency = num => {
  return `₦${num?.toLocaleString('en-IN')}`;
};
