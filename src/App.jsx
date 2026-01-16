import { useState } from 'react';
import SalaryOfferCard from './components/SalaryOfferCard';

function App() {
  const [hasData, setHasData] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-0 sm:p-6">
      <SalaryOfferCard 
        hasData={hasData} 
        onRefresh={() => setHasData(true)} 
        onClose={() => setHasData(false)}
      />
    </div>
  );
}

export default App;