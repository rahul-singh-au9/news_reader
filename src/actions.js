import axios from "axios";

// GET ALL THE NEWS
export const allNews = async (query, sDate, eDate) =>
  sDate && eDate
    ? await axios.get(
        `https://get.scrapehero.com/news-api/news/?q=${query}&start_date=${sDate}&end_date=${eDate}&x-api-key=qoPtuQnVcBJqgv5YJp1nJsXrX1RlkAd0`
      )
    : await axios.get(
        `https://get.scrapehero.com/news-api/news/?q=${query}&x-api-key=qoPtuQnVcBJqgv5YJp1nJsXrX1RlkAd0`
      );

