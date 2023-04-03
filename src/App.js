import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

// api url
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
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
  const { title, duties, dates } = initialData[value];

  // console.log(title);
  // console.log(duties);
  // console.log(company);
  // console.log(dates);

  return (
    <article className="container">
      <div className="title">
        <h1>React-Tabs</h1>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {initialData.map((val, index) => {
          return (
            <>
              <button
                key={uuidv4()}
                className={`job-btn   ${value === index ? "active-btn" : null}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {val.company}
              </button>
            </>
          );
        })}
      </div>
      <div className="">
        <h3 className="job-info">{title}</h3>
        <h4 className="job-date">{dates}</h4>
        <div className="job-desc">
          {duties.map((description) => {
            return (
              <>
                <FaAngleDoubleRight className="job-icon" />
                <p key={uuidv4()}>{description}</p>
              </>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default App;
