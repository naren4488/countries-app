import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import CountryCards from "./components/CountryCards";

function App() {
  const [data, setData] = useState([]);
  // console.log("data", data);

  const fetchData = async () => {
    try {
      let res = await axios.get("https://restcountries.com/v3.1/all");
      return res.data;
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  useEffect(() => {
    const naren = async () => {
      let result = await fetchData();
      setData(result);
    };
    naren();
  }, []);
  return (
    <div className="App">
      {data.length ? (
        data.map((data) => <CountryCards key={data.name.common} {...data} />)
      ) : (
        <div>
          <h2>Countries Information</h2>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default App;
