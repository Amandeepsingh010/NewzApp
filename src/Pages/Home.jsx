import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NewsItem from "../Components/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  let [searchParams] = useSearchParams();
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [q, setQ] = useState("");
  let [page, setPage] = useState(1);

  async function getAPIdata(q) {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=1&from=2025-04-01&language=${
        searchParams.get("language") ?? "en"
      }&sortBy=publishedAt&apiKey=4191a05b482a41ff9d1f4ce8a39851fe`
    );
    res = await res.json();
    if (res.status === "ok") {
      setTotalResults(res.totalResults);
      setArticles(res.articles);
    }
  }

  // let fetchData = async () => {
  //   setPage(page+1)
  //   let res = await fetch(`https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=${page}&from=2025-04-01&language=${searchParams.get("language")??"en"}&sortBy=publishedAt&apiKey=4191a05b482a41ff9d1f4ce8a39851fe`)
  //   res = await res.json()
  //   if(res.status === "ok"){
  //     setArticles(articles.concat(res.articles))
  //   }
  // }
  let fetchData = async () => {
    let nextPage = page + 1;
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&pageSize=24&page=${nextPage}&from=2025-04-01&language=${
        searchParams.get("language") ?? "en"
      }&sortBy=publishedAt&apiKey=4191a05b482a41ff9d1f4ce8a39851fe`
    );
    res = await res.json();
    if (res.status === "ok") {
      setArticles((prev) => prev.concat(res.articles));
      setPage(nextPage);
    }
  };

  useEffect(() => {
    let q = searchParams.get("q") ?? "ALL";
    setQ(q);
    setArticles([]);
    setPage(1);
    getAPIdata(q);
  }, [searchParams]);
  return (
    <>
      <div className="container-fluid mt-5 pt-5">
        <h5 className="bg-secondary text-center p-2 text-light mt-3 text-capitalize">
          {q} Articles
        </h5>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="my-5 d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  source={item.source?.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  date={item.publishedAt}
                  pic={item.urlToImage}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Home;
