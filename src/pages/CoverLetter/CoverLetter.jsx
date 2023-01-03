import Editor from "../../components/Editor/Editor";
import "./CoverLetter.scss";
export const CoverLetter = () => {
  return (
    <div className="cover-letter">
      <div className="cover-letter__container">
        <div className="cover-letter__editor">
          <Editor />
        </div>
      </div>
    </div>
  );
};
