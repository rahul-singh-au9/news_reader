import React, { useEffect, useState } from "react";
import moment from "moment";

const Main = ({ newsId, newsList }) => {
  const [news, setNews] = useState({});

  const singleNews = newsId
    ? newsList.find((news) => news.id === newsId)
    : null;

  useEffect(() => {
    if (singleNews) setNews(singleNews);
  }, [newsId, singleNews]);

  return (
    <div className="card mb-3">
      <div className="card-body">
        {newsId ? (
          <>
            <h5 className="card-title">{news?.title}</h5>
            <p className="card-text">
              <small className="text" style={{ color: "blue" }}>
                {news?.publication}
              </small>
              <small className="text-muted" style={{ marginLeft: "64%" }}>
                {moment(news?.date).format("MMM Do YY")}
              </small>
            </p>
            <p className="card-text">{news?.content}</p>
            <a
              href={`${news?.url}`}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              read more
            </a>
          </>
        ) : (
          <>
            <h5 className="card-title">{newsList[0]?.title}</h5>
            <p className="card-text">
              <small className="text-muted">{newsList[0]?.publication}</small>
              <small className="text-muted" style={{ marginLeft: "64%" }}>
                {moment(newsList[0]?.date).format("MMM Do YY")}
              </small>
            </p>
            <p className="card-text">{newsList[0]?.content}</p>
            <a
              href={`${newsList[0]?.url}`}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              read more
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
