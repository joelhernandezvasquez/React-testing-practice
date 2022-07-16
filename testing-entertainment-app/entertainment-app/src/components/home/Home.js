import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Search from "../Search/Search";
import EntertaimentLayout from "../Layout/EntertaimentLayout";
import ListCard from "../EntertemainList/ListCard";
import { fetchRecommended } from "../../API";
import { apiKey } from "../../API";
import Trending from "./Trending";
import Recommended from "../Recommended/Recommended";
import "../../styles/main.scss";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recommended, setRecommended] = useState([]);
  const { data, isLoading } = useFetch(searchTerm,`https:api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchTerm}`);

  useEffect(() => {
    fetchRecommended().then((response) => {
      response.success
        ? setRecommended(response.data)
        : console.log(response.data);
    });
  }, []);

  return (
    <section className="home_wrapper grid" aria-label="Home">
      <EntertaimentLayout>
        <main className="container main_area">
          <Search searchTerm={searchTerm} handleSearchTerm={setSearchTerm} />

          {!searchTerm ? (
            <>
              <Trending />

              <Recommended title={"Reccomended"}>
                <ListCard data={recommended} type="recommended" />
              </Recommended>
            </>
          ) : (
            <section className="search_found animate__animated animate__fadeIn">
              {!isLoading && (
                <Recommended
                  title={`${data.results.length} results for ‘${searchTerm}’`}
                >
                  <ListCard data={data.results} type="search" />
                </Recommended>
              )}
            </section>
          )}
        </main>
      </EntertaimentLayout>
    </section>
  );
};

export default Home;
