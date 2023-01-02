import "./SocialMedia.scss";
import github from "../../assets/logo/github.svg";
import linkedin from "../../assets/logo/linkedin.png";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://github.com/michaelshimeles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github link" className="social-media__github" />
      </a>
      <a
        href="https://www.linkedin.com/in/michaelshimeles/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedin}
          alt="linkedin link"
          className="social-media__linkedin"
        />
      </a>
    </div>
  );
};
