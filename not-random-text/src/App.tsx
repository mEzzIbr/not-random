import "./App.css";
import TitleText from "./components/TitleText";
import ContentText from "./components/ContentText";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [poems, setPoem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateNewText = () => {
    setIsLoading(true);
    axios
      .get(
        "https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/random_record?limit=1"
      )
      .then((res) => {
        setPoem(res.data);

        setIsLoading(false);
      });
  };

  useEffect(() => {
    generateNewText();
  }, []);

  return (
    <div className="App">
      {poems && !isLoading && <TitleText title={poems} />}
      {isLoading && <span> جار التحميل... </span>}
      {poems && <ContentText title={poems} />}
      <button id="generate" onClick={generateNewText}>
        ولد أشعارًا جديدة 🔁
      </button>
    </div>
  );
}

export default App;
