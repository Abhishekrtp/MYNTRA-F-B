import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import Spinner from "../components/Spinner";

const Home = () => {
  const items = useSelector((store) => store.items);
  const isFetching = useSelector((store) => store.fetchStatus.isFetching);

  return (
    <main>
      <div className="items-container">
        {isFetching ? (
           <Spinner />
        ) : items.length > 0 ? (
          items.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
           <Spinner />
        )}
      </div>
    </main>
  );
};

export default Home;
