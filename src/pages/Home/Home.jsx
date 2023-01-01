import "./Home.scss";
import { Link } from "react-router-dom";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { NavBar } from "../../components/NavBar/NavBar";
export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="home__container">
        <Link to="/grammar" className="home__grammar">
          <div className="home__info">
            <p className="home__emoji">📝</p>
            <p className="home__title">Fix Your Grammar</p>
            <p className="home__description">
              Effortlessly fix your grammar mistakes and improve your writing
              with the ultimate proofreading tool
            </p>
          </div>
        </Link>
        <Link to="/captions" className="home__captions">
          <div className="home__info">
            <p className="home__emoji">💬</p>
            <p className="home__title">Instagram Captions</p>
            <p className="home__description">
              Create captions for an Instagram post just by describing what the
              post is about
            </p>
          </div>
        </Link>
        <Link to="/" className="home__grammar">
          <div className="home__info">
            <p className="home__emoji">💼</p>
            <p className="home__title">Resume Builder (Coming Soon)</p>
            <p className="home__description">
              Improve your job search success with our powerful AI-powered
              resume optimization tool, designed to help you craft a standout
              and effective resume.
            </p>
          </div>
        </Link>
      </div>
      <SocialMedia />
    </div>
  );
};
