import moment from "moment";

const NewsNav = ({ setNewsId, newsList, setSDate, setEDate }) => {
  const handleClick = (id) => {
    setNewsId(id);
  };

  const handleSChange = (e) => {
    setSDate(e.target.value);
  };

  const handleEChange = (e) => {
    setEDate(e.target.value);
  };

  console.log("newsList", newsList);

  return (
    <div className="row">
      <div className="col-md-4">
        <label htmlFor="date">start date</label>
        <br />
        <input type="date" name="sDate" onChange={handleSChange} />
      </div>
      <div className="col-md-3">
        <label htmlFor="date"> end date</label>
        <br />
        <input type="date" name="eDate" onChange={handleEChange} />
      </div>
      {newsList?.map((news) => (
        <div
          className="col-sm-12"
          onClick={() => handleClick(news.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="card">
            <div className="card-body">
              <p className="card-title disable">
                {moment(news.date).format("MMM Do YY")}
              </p>
              <h5 className="card-text primary">{news.title}</h5> <br />
              {news.sentiment === "Positive" ? (
                <span>&#128994;</span>
              ) : news.sentiment === "Negative" ? (
                <span>&#128308;</span>
              ) : (
                <span className="dot"></span>
              )}
              {news.publication}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsNav;
