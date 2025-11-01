import React from 'react';
import { DollarSign } from 'lucide-react';

export default function IncomeInput({ income, setIncome, onCalculate }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
      <label className="block text-lg font-semibold text-gray-700 mb-3">
        Enter Your Weekly, Biweekly, or Monthly Income
      </label>
      <div className="flex gap-3">
        <div className="relative flex-1">
          <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="5000"
            step="0.01"
            min="0"
            className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition"
          />
        </div>
        <button
          onClick={onCalculate}
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}