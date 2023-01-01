import InstagramCaptions from "../../components/InstagramCaptions/InstagramCaptions";
import { NavBar } from "../../components/NavBar/NavBar";
import "./Captions.scss";
export const Captions = () => {
  return (
    <div className="captions">
      <NavBar />
      <InstagramCaptions />
    </div>
  );
};
