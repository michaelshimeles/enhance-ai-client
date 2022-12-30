import "./Home.scss";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__text">Fix Your Grammar 📝</h1>
      <Search />
    </div>
  );
};
