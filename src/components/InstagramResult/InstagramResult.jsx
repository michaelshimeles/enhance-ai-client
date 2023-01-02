export const InstagramResult = ({ className, newResult }) => {
  return (
    <div className={className}>
      <ol>
        {newResult.slice(1).map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
    </div>
  );
};
