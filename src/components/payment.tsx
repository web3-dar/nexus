
import { FaMoneyBillWave, FaMobileAlt, FaFileInvoice, FaCarAlt, FaUmbrella, FaExclamationCircle, FaHeart } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const payments = [
  { id: 1, name: "Money transfer", icon:  <div className="text-xl text-green-600"><FaMoneyBillWave  /></div> },
  { id: 2, name: "Mobile payment", icon:  <div className="text-xl text-blue-600" ><FaMobileAlt /></div> },
  { id: 3, name: "IBAN payment", icon: <div className="text-xl text-purple-600"> <RiBankFill  /> </div>},
  { id: 4, name: "Utility bills", icon:  <div  className="text-xl text-orange-600"><FaFileInvoice /></div> },
  { id: 5, name: "Transport", icon:  <div className="text-xl text-gray-600" ><FaCarAlt /> </div>},
  { id: 6, name: "Insurance", icon: <div className="text-xl text-indigo-600"> <FaUmbrella  /></div> },
  { id: 7, name: "Penalties", icon: <div className="text-xl text-red-600"> <FaExclamationCircle  /> </div>},
  { id: 8, name: "Charity", icon:  <div className="text-xl text-pink-600" ><FaHeart /> </div>},
];

const PaymentPage = () => {
  return (
    <>
   
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      {/* Header */}
      <header className="w-full flex items-center justify-between py-4 border-b">
        <button className="text-xl">←</button>
        <h1 className="text-lg font-semibold">Payments</h1>
        <div className="w-8"></div> {/* Empty spacer */}
      </header>

      {/* Payments List */}
      <div className="w-full max-w-md mt-6 space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
                {payment.icon}
              </div>
              <span className="text-sm font-medium">{payment.name}</span>
            </div>
            <button className="text-blue-500">
             <div className="text-lg"><AiOutlineInfoCircle  />  </div> 
            </button>
          </div>
        ))}
      </div>
      
    </div>

    //////////////
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
     </>
  );
};

export default PaymentPage;
