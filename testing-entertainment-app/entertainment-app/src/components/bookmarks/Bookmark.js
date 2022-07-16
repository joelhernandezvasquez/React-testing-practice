import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import EntertaimentLayout from "../Layout/EntertaimentLayout";
import Search from "../Search/Search";
import BookmarkList from "./BookmarkList";
import { getAllShows } from "../../API";
import { filterByMedia } from "../helpers";
import Recommended from "../Recommended/Recommended";

const Bookmark = () => {
  const [bookmarkMovies, setBookmarkMovies] = useState([]);
  const [bookmarkTvSeries, setBookmarkTvSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useFetch(
    searchTerm,
    `http://localhost:3001/bookmark_shows?q=${searchTerm}`
  );

  useEffect(() => {
    getAllShows().then((response) => {
      const { success, data } = response;

      if (success) {

      
         setBookmarkMovies(filterByMedia(data, "movie"));
        setBookmarkTvSeries(filterByMedia(data, "tv"));
      
      } else {
        console.log(data);
      }
    });
  }, []);

  return (
    <section
      className="grid animate__animated animate__fadeIn"
      aria-label="bookmark"
    >
      <EntertaimentLayout>
        <main className="container main_area">
          <Search searchTerm={searchTerm} handleSearchTerm={setSearchTerm} />
          {!searchTerm ? (
            <>
              <Recommended title={"Bookmarked Movies"}>
                <BookmarkList data={bookmarkMovies} />
              </Recommended>

              <Recommended title={"Bookmarked Tv Series"}>
                <BookmarkList data={bookmarkTvSeries} />
              </Recommended>
            </>
          ) : (
            <section className="search_found animate__animated animate__fadeIn">
              {!isLoading && (
                <Recommended
                  title={`Found ${data.length} results for ‘${searchTerm}’`}
                >
                  <BookmarkList data={data} type="search" />
                </Recommended>
              )}
            </section>
          )}
        </main>
      </EntertaimentLayout>
    </section>
  );
};

export default Bookmark;
