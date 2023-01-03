import "./Home.scss";
import { Link } from "react-router-dom";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { NavBar } from "../../components/NavBar/NavBar";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Typewriter
        options={{
          strings: [
            "Enhance AI",
            "Enhance Grammar",
            "Enhance IG Captions",
            "Enhance Resume",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <div className="home__container">
        <Link to="/grammar" className="home__grammar">
          <div className="home__info">
            <p className="home__emoji">📝</p>
            <p className="home__title">Fix Your Grammar</p>
            <p className="home__description">
              Our advanced grammar fixing tool utilizes OpenAI's technology to
              quickly and accurately identify and correct errors, helping you
              elevate your writing.
            </p>
          </div>
        </Link>
        <Link to="/captions" className="home__captions">
          <div className="home__info">
            <p className="home__emoji">💬</p>
            <p className="home__title">Instagram Captions</p>
            <p className="home__description">
              Upgrade your Instagram game with captions generated by our
              AI-powered system, taking the hassle out of coming up with
              creative captions.
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
        <Link to="/" className="home__grammar">
          <div className="home__info">
            <p className="home__emoji">📩</p>
            <p className="home__title">Cover Letter (Coming Soon)</p>
            <p className="home__description">
              Transform your job search with our AI-powered cover letter
              generator, crafting unique and professional letters in a matter of
              seconds!
            </p>
          </div>
        </Link>
      </div>
      <SocialMedia />
    </div>
  );
};
