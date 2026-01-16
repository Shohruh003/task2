import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BiRefresh } from "react-icons/bi";

const SalaryOfferCard = ({ hasData = true, onRefresh, onClose }) => {
  const [salary, setSalary] = useState(15000000);
  
  const MIN_SALARY = 12000000;
  const MAX_SALARY = 17000000;
  
  const getPercentage = (value) => {
    return ((value - MIN_SALARY) / (MAX_SALARY - MIN_SALARY)) * 100;
  };

  const percentage = getPercentage(salary);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US').format(value).replace(/,/g, ',');
  };

  const formatShortCurrency = (value) => {
    return Math.round(value / 1000000) + 'M';
  };

  return (
    <div className="relative w-full sm:max-w-[480px] min-h-screen sm:min-h-[580px] sm:rounded-2xl bg-gradient-to-br from-pink-50 via-white to-orange-50/30 p-6 sm:p-6 shadow-none sm:shadow-xl border-0 sm:border border-gray-200/50 flex flex-col">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold z-10 cursor-pointer"
      >
        ×
      </button>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-2xl rounded-full bg-pink-100/50 p-1">
             <img src="salary-1.svg" alt="salary-1.svg" />
          </div>  
          <h2 className="text-xl font-bold text-gray-800">Salary Offer</h2>
        </div>
        <p className="text-sm text-gray-600">
          AI-driven compensation analysis for Senior Frontend Developer.
        </p>
      </div>

      <div className="mb-6 rounded-lg bg-white/70 p-4 border border-gray-200">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900">Ivan Petrov</h3>
            <p className="text-sm text-gray-600">Middle Frontend Developer</p>
          </div>

          <div className="flex items-center justify-between gap-3 flex-shrink-0">
            <div className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200">
              <img src="stars.svg" alt="stars.svg" />
              AI Fit: 94%
            </div>
            <img src="vector.svg" alt="vector.svg" />
          </div>
        </div>
      </div>

      {hasData ? (
        <div className="flex-1 flex flex-col animate-in fade-in duration-500">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <img src="salary-black.svg" width={20} height={20} alt="salary-black.svg" />
              <h3 className="text-lg font-semibold text-gray-700">Recommended Base Salary</h3>
            </div>

            <p className="text-3xl sm:text-4xl font-bold text-pink-600 tracking-tight transition-all">
              {formatCurrency(salary)} UZS
            </p>

            <div className="mt-2 inline-flex items-center gap-1 rounded bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200">
              <FaCheckCircle className="text-green-600" />
              Within Budget
            </div>
          </div>

          <div className="mb-8 relative">
            <div className="flex items-center gap-2 mb-6">
              <img src="market.svg" width={20} height={20} alt="market.svg" />
              <h3 className="text-lg font-semibold text-gray-700">Market Comparison</h3>
            </div>

            <div className="relative mb-3 h-8 flex items-center">
              <div className="absolute w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                 <div 
                    className="h-full bg-gradient-to-r from-pink-300/60 to-pink-400/40"
                    style={{ width: `${percentage}%` }}
                 ></div>
              </div>

              <input 
                type="range" 
                min={MIN_SALARY} 
                max={MAX_SALARY} 
                step={100000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="absolute w-full h-8 opacity-0 cursor-pointer z-20"
              />

              <div
                className="absolute h-5 w-5 rounded-full border-4 border-white bg-pink-600 shadow-md pointer-events-none z-10 transition-transform duration-75"
                style={{ left: `calc(${percentage}% - 10px)` }}
              ></div>
              
              <div
                className="absolute -top-7 rounded-md bg-pink-600 px-2 py-1 text-xs font-bold text-white shadow-md pointer-events-none z-10 transition-all duration-75 whitespace-nowrap"
                style={{ left: `calc(${percentage}% - 24px)` }}
              >
                {formatShortCurrency(salary)} UZS
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{formatShortCurrency(MIN_SALARY)}</span>
              <span>AVG</span>
              <span>{formatShortCurrency(MAX_SALARY)}</span>
            </div>

            <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
              <img src="varning.svg" width={16} height={16} alt="varning.svg" />
              Based on 120 similar roles in your region
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="key-factor.svg" width={20} height={20} alt="key-factor.svg" />
              <h3 className="text-lg font-semibold text-gray-700">Key factors</h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-green-600 flex-shrink-0" />
                <span>6 years experience confirmed</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-green-600 flex-shrink-0" />
                <span>Strong match for React</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 text-green-600 flex-shrink-0" />
                <span>High demand in current quarter</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
          <div className="relative mb-8">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-200/50 rounded-full blur-2xl"></div>

             <img src="coin.svg" width={80} height={80} alt="coin.svg" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">No salary data yet</h3>
          <p className="text-center text-gray-600 mb-8 max-w-[300px] leading-relaxed">
            We couldn't generate a salary recommendation yet. Update or complete the key factors, then refresh to recalculate.
          </p>

          <button 
            onClick={onRefresh}
            className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
          >
            <BiRefresh className="text-xl" />
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default SalaryOfferCard;