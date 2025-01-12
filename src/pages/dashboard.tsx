import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import {  FaSyncAlt } from "react-icons/fa";
import img from "../assets/01.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  const allTransactions = [
    { type: "Debit", amount: -54.0, date: "2025-01-03 06:06:00" },
    { type: "Credit", amount: 87.0, date: "2025-01-03 05:59:00" },
    { type: "Debit", amount: -120.5, date: "2025-01-02 15:30:00" },
    { type: "Credit", amount: 45.0, date: "2025-01-02 12:20:00" },
    { type: "Debit", amount: -35.0, date: "2025-01-01 08:45:00" },
    { type: "Credit", amount: 250.0, date: "2025-01-01 07:00:00" },
    { type: "Debit", amount: -75.5, date: "2024-12-31 10:15:00" },
    { type: "Credit", amount: 90.0, date: "2024-12-31 09:50:00" },
  ];

  const [visibleTransactions, setVisibleTransactions] = useState(4);

  const loadMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 4, allTransactions.length));
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-purple-700 text-white p-4 flex justify-between items-center">
        <img src={img} alt="Profile" className="h-10 w-10 rounded-full" />
        <h1 className="text-lg  text-white font-semibold">Dashboard</h1>
        <div className="cursor-pointer text-white" onClick={refreshPage}>
          <FaSyncAlt />
        </div>
      </div>

      {/* Total Balance Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mx-4 mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700 font-medium">Total Balance</h2>
          <button className="bg-purple-100 text-purple-600 p-2 rounded-lg">
            <span className="material-icons">content_copy</span>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-2">$1,403,506.00</h1>
        <br />
        <div className="grid grid-cols-4 gap-4 mt-4">
          <button
            className="flex flex-col items-center text-purple-600"
            onClick={() => navigate("/overview")}
          >
            <div className="bg-purple-100 p-4 rounded-lg">
              <span className="material-icons">send</span>
            </div>
            <p className="mt-2 text-sm text-black font-semibold">Send Money</p>
          </button>
          <button
            className="flex flex-col items-center text-pink-600"
            onClick={() => navigate("/deposit")}
          >
            <div className="bg-red-500 p-4 rounded-lg">
              <span className="material-icons text-white">add</span>
            </div>
            <p className="mt-2 text-sm text-black font-semibold">Add Money</p>
          </button>
          <button
            className="flex flex-col items-center text-yellow-600"
            onClick={() => navigate("/loan")}
          >
            <div className="bg-yellow-100 p-4 rounded-lg">
              <span className="material-icons">account_balance_wallet</span>
            </div>
            <p className="mt-2 text-sm text-black font-semibold">Loan</p>
          </button>
          <button
            className="flex flex-col items-center text-green-600"
            onClick={() => navigate("/overview")}
          >
            <div className="bg-green-100 p-4 rounded-lg">
              <span className="material-icons">help</span>
            </div>
            <p className="mt-2 text-sm text-black font-semibold">Need Help?</p>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6 px-4">
  <h2 className="text-gray-700 font-medium mb-2">Recent Transactions</h2>
  {allTransactions.slice(0, visibleTransactions).map((transaction, index) => (
    <div key={index} className="bg-white shadow-lg p-4 rounded-lg mb-4">
      <div className="flex justify-between">
        <p className="font-semibold">{transaction.type}</p>
        <p
          className={`font-bold ${
            transaction.amount < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {transaction.amount < 0
            ? `-${Math.abs(transaction.amount)}`
            : `+${transaction.amount}`}
        </p>
      </div>
      <p className="text-sm text-gray-500">{transaction.date}</p>
    </div>
  ))}
  <button
    onClick={loadMoreTransactions}
    className="mt-4 bg-purple-600 m-auto flex  mb-3 text-white px-4 py-2 rounded-lg"
    disabled={visibleTransactions >= allTransactions.length}
  >
    {visibleTransactions >= allTransactions.length
      ? "Load More"
      : "Load More"}
  </button>
</div>


      {/* Sticky Navigation Bar */}
      <nav className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-around">
      <Link
        to="/overview"
        className="flex flex-col items-center text-gray-600 hover:text-orange-400 hover:font-extrabold"
      >
        <span className="material-icons">dashboard</span>
        <span className="text-xs mt-1">Overview</span>
      </Link>
      <Link
        to="/history"
        className="flex flex-col items-center text-gray-600 hover:text-orange-400 hover:font-extrabold"
      >
        <span className="material-icons">history</span>
        <span className="text-xs mt-1">History</span>
      </Link>
      <Link
        to="/alerts"
        className="flex flex-col items-center text-gray-600 hover:text-orange-400 hover:font-extrabold"
      >
        <span className="material-icons">error_outline</span>
        <span className="text-xs mt-1">Alerts</span>
      </Link>
      <Link
        to="/my-cards"
        className="flex flex-col items-center text-gray-600 hover:text-orange-400 hover:font-extrabold"
      >
        <span className="material-icons">credit_card</span>
        <span className="text-xs mt-1">My Cards</span>
      </Link>
      <Link
        to="/settings"
        className="flex flex-col items-center text-gray-600 hover:text-orange-400 hover:font-extrabold"
      >
        <span className="material-icons">settings</span>
        <span className="text-xs mt-1">Settings</span>
      </Link>
    </nav>
    </div>
  );
};

export default Dashboard;
