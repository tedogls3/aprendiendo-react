import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import "./style.css";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <div className="container">
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Add A Random Fact</button>
      <div className="wrapper">
        <p>{fact}</p>
        {imageUrl && <img src={imageUrl} alt={`${imageUrl} `} />}
      </div>
    </div>
  );
}

export default App;
