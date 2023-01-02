import "./InstagramResult.scss";
export const InstagramResult = ({ className, newResult }) => {
  return (
    <div className={className}>
      <ol>
        {newResult.slice(1).map((line, index) => (
          <div className="ig-result" key={index}>
            {line}
            <button onClick={() => navigator.clipboard.writeText(`${line}`)}
            className="ig-result__button"
            >
              Copy
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
};
