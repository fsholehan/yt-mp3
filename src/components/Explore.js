import axios from "axios";
import { useState, useEffect } from "react";
import ButtonCustom from "./ButtonCustom";
import Card from "./Card";
import Categories from "./Categories";

function Explore() {
  const [releases, setReleases] = useState([]);

  const getReleases = async () => {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=id&videoCategoryId=10&key=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response.data.items);
    setReleases(response.data.items);
  };

  useEffect(() => {
    getReleases();
  }, []);

  return (
    <div className="px-12 mt-5 flex flex-col justify-center">
      <ButtonCustom />

      <h1 className="text-2xl mt-5 px-8 font-bold">New Releases</h1>

      <div className="overflow-x-scroll scrollbar-hide flex space-x-1 flex-shrink-0 sm:px-0 relative">
        {releases.map((release, index) => (
          <Card release={release} key={index} />
        ))}
        {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-white h-10 w-1/12" /> */}
      </div>
      <h1 className="text-2xl mt-5 px-8 font-bold">Category</h1>
      <Categories />
    </div>
  );
}

export default Explore;
