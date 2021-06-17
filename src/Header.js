import { useEffect } from "react";
import { allNews } from "./actions";

const Header = ({ search, setSearch, setNewsList, sDate, eDate }) => {
  const fetchAllNews = async () => {
    let res = await allNews(search, sDate, eDate);
    setNewsList(res.data.result.data);
  };

  useEffect(() => {
    fetchAllNews();
  }, [sDate, eDate]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await allNews(search);
    setNewsList(res.data.result.data);
  };

  return (
    <nav
      className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="collapse navbar-collapse">
        <span className="navbar-brand" style={{ cursor: "pointer" }}>
          News Reader
        </span>
        <form
          className="form-inline my-2 my-lg-0 ml4"
          onSubmit={handleSubmit}
          style={{ marginLeft: "15%" }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{
              color: "white",
              border: "1px solid black",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
