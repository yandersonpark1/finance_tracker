export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

export const calculateBudget = (income) => {
  const numIncome = parseFloat(income) || 0;
  return {
    needs: numIncome * 0.5,
    wants: numIncome * 0.3,
    savings: numIncome * 0.2,
    total: numIncome
  };
};