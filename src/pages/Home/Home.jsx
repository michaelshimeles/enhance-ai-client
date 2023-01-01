import "./Home.scss";
import { Link } from "react-router-dom";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Link to="/grammar" className="home__grammar">
          <div className="home__info">
            <p>📝</p>
            <p className="home__title">Fix Your Grammar</p>
            <p className="home__description">
              Effortlessly fix your grammar mistakes and improve your writing
              with the ultimate proofreading tool
            </p>
          </div>
        </Link>
        <Link to="/captions" className="home__captions">
          <div className="home__info">
            <p>💬</p>
            <p className="home__title">Instagram Captions (soon)</p>
            <p className="home__description">
              Create captions for an Instagram post just by describing what the
              post is about
            </p>
          </div>
        </Link>
        <Link to="/" className="home__grammar">
          <div className="home__info">
            <p>🥘</p>
            <p className="home__title">Coming Soon</p>
            <p className="home__description">
              More stuff coming your way, stay tuned as we chef it up in the
              kitchen.
            </p>
          </div>
        </Link>
      </div>
      <SocialMedia />
    </div>
  );
};
