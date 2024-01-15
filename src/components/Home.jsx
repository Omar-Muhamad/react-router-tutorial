import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button className="border-2 px-4 py-2 rounded" onClick={() => navigate('order-summary', {replace: true})}>Place order</button>
    </>
  );
};
export default Home;
