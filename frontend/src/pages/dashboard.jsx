import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import IncomeInput from '../components/income_input';
import BudgetBreakdown from '../components/budget_breakdown';
import { calculateBudget } from '../utils/formatter';

export default function Dashboard() {
  const [income, setIncome] = useState('');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const budget = calculateBudget(income);

  const handleCalculate = () => {
    if (income && parseFloat(income) > 0) {
      setShowBreakdown(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Finance Tracker</h1>
          </div>
          <p className="text-gray-600">Smart budgeting with the 50/30/20 rule</p>
        </div>

        <IncomeInput 
          income={income}
          setIncome={setIncome}
          onCalculate={handleCalculate}
        />

        {showBreakdown && parseFloat(income) > 0 && (
          <BudgetBreakdown budget={budget} />
        )}
      </div>
    </div>
  );
}