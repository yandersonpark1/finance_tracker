import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Home, ShoppingBag, PiggyBank } from 'lucide-react';
import CategoryCard from './category_card';
import { formatCurrency } from '../utils/formatter';

export default function BudgetBreakdown({ budget }) {
  const data = [
    { name: 'Needs (50%)', value: budget.needs, color: '#3b82f6' },
    { name: 'Wants (30%)', value: budget.wants, color: '#8b5cf6' },
    { name: 'Savings (20%)', value: budget.savings, color: '#10b981' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Budget Breakdown
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatCurrency(value)} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <CategoryCard
          title="Needs"
          amount={budget.needs}
          description="Essentials like rent, utilities, groceries, insurance, minimum debt payments"
          icon={Home}
          color="blue"
        />
        <CategoryCard
          title="Wants"
          amount={budget.wants}
          description="Entertainment, dining out, hobbies, subscriptions, shopping"
          icon={ShoppingBag}
          color="purple"
        />
        <CategoryCard
          title="Savings"
          amount={budget.savings}
          description="Emergency fund, retirement, investments, extra debt payments"
          icon={PiggyBank}
          color="green"
        />
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-2">About the 50/30/20 Rule</h4>
        <p className="text-indigo-800 text-sm">
          This budgeting method allocates your after-tax income into three categories: 50% for needs, 
          30% for wants, and 20% for savings and debt repayment. It's a simple framework to help you 
          maintain financial balance and build wealth over time.
        </p>
      </div>
    </div>
  );
}