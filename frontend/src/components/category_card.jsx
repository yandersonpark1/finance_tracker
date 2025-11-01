import React from 'react';
import { formatCurrency } from '../utils/formatter';

export default function CategoryCard({ title, amount, description, icon: Icon, color }) {
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-100',
      text: 'text-purple-600'
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-100',
      text: 'text-green-600'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-t-4 ${colors.border}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 ${colors.bg} rounded-lg`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className={`text-3xl font-bold ${colors.text} mb-2`}>
        {formatCurrency(amount)}
      </p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}