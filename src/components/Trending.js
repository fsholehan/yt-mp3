import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import TrendingList from "./TrendingList";
import { Helmet } from "react-helmet";

function Trending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTrending = async () => {
    setLoading(true);
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=ID&videoCategoryId=10&key=${process.env.REACT_APP_API_KEY}`
    );

    // console.log(response.data.items);
    setTrending(response.data.items);
    setLoading(false);
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>
          Download Lagu Mp3 Terbaik 2021, Gudang Lagu Terbaru Gratis
        </title>
        <meta
          name="description"
          content="Download Lagu Mp3 Terbaru 2021, Gudang Lagu Terbaik Gratis. Situs Download Lagu Gratis, Gudang lagu Mp3 Indonesia, lagu barat terbaik."
        />
        <meta
          name="keyword"
          content="Download Lagu Mp3 Terbaru 2021, Gudang Lagu Terbaik Gratis. Situs Download Lagu Gratis, Gudang lagu Mp3 Indonesia, lagu barat terbaik."
        />
      </Helmet>
      <div className="w-full pl-62 mt-12">
        <ul className="divide-y divide-gray-100">
          {loading ? (
            <Loading />
          ) : (
            trending.map((result) => (
              <TrendingList result={result} key={result.id} />
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Trending;
