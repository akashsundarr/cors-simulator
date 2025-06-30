const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-container">
      {result.success ? (
        <p className="result-success">
          ✅ API Success: {JSON.stringify(result.data)}
        </p>
      ) : (
        <p className="result-error">
          ❌ CORS Error: {result.error}
        </p>
      )}
    </div>
  );
};

export default ResultDisplay;
