import { v4 as uuidv4 } from "uuid";
import {} from "react-icons/fa";
import { useEffect, useState } from "react";

// api url
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = response.json();
    console.log(data);

    setLoading(false);
    setInitialData(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <article className="container">
      <div className="title">React-Tabs</div>
      <div className="underline"></div>
      <div></div>
    </article>
  );
};

export default App;
