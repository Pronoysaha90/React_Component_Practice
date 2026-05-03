import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 from-slate-900 via-gray-800 to-slate-900 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Counter App
        </h1>
        <p className="text-gray-500 mb-6">By Pronoy</p>

        {/* Counter Box */}
        <div className="bg-gray-800 from-indigo-500 to-purple-600 text-white text-6xl font-bold py-8 rounded-2xl shadow-lg mb-6">
          {counter}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={addValue}
            className="bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            ➕ Add
          </button>

          <button
            onClick={removeValue}
            className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            ➖ Remove
          </button>
        </div>

        {/* Limit Message */}
        <p className="mt-6 text-sm text-gray-500">
          Minimum: 0 | Maximum: 5
        </p>
      </div>
    </div>
  );
}

export default Counter;