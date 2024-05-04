import HomeItems from "../components/HomeItems";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <div>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItems key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
