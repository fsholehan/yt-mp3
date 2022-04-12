import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import SearchList from "./SearchList";

function Search() {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResults = async () => {
    setLoading(true);
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_API_KEY}`
    );

    // console.log(response.data);
    setResults(response.data.items);
    setLoading(false);
  };

  useEffect(() => {
    getResults();
  }, [keyword]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>Search: {keyword} MP3, Video MP4 - lagump3dl.com</title>
        <meta
          name="description"
          content={`Download lagu ${keyword} convert mp3, Video 3gp & mp4. List download link Lagu MP3 ${keyword} gratis and free streaming full album terbaru ${keyword} mp3 download.`}
        />
        <meta
          name="keyword"
          content={`Download lagu ${keyword} convert mp3, Video 3gp & mp4. List download link Lagu MP3 ${keyword} gratis and free streaming full album terbaru ${keyword} mp3 download.`}
        />
      </Helmet>
      <h1 className="text-center mt-5 mb-5 font-semibold text-xl">
        Search for: {keyword}
      </h1>
      <ul className="divide-y divide-gray-100">
        {!loading ? (
          results?.map((result) => <SearchList result={result} />)
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}

export default Search;
