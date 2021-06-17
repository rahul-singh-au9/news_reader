import { useState } from "react";
import Main from "./main";
import NewsNav from "./NewsNav";
import Header from "./Header";

const App = () => {
  const [newsId, setNewsId] = useState("");
  const [search, setSearch] = useState("iphone");
  const [newsList, setNewsList] = useState([]);
  const [sDate, setSDate] = useState("2020-12-01");
  const [eDate, setEDate] = useState("2020-12-03");

  // console.log("sDate", sDate, eDate);

  return (
    <div className="container-fluid">
      <div className="row">
        <Header
          setSearch={setSearch}
          search={search}
          setNewsList={setNewsList}
          newsList={newsList}
          sDate={sDate}
          eDate={eDate}
        />
      </div>
      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col-md-5">
          <NewsNav
            setNewsId={setNewsId}
            search={search}
            newsList={newsList}
            setSDate={setSDate}
            setEDate={setEDate}
          />
        </div>
        <div className="col-md-7">
          <Main newsId={newsId} search={search} newsList={newsList} />
        </div>
      </div>
    </div>
  );
};

export default App;
