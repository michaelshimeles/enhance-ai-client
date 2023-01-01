import "./Grammar.scss";
import { FixGrammar } from "../../components/FixGrammar/FixGrammar";
import { NavBar } from "../../components/NavBar/NavBar";
export const Grammar = () => {
  return (
    <div className="grammar">
      <NavBar />
      <h1 className="grammar__text">Fix Your Grammar 📝</h1>
      <FixGrammar />
    </div>
  );
};
