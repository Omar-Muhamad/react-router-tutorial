import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed!</div>
      <button
        className="border-2 px-4 py-2 rounded"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </>
  );
};
export default OrderSummary;
