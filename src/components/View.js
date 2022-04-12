import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState("");
  const [lyric, setLyric] = useState({});
  const [error, setError] = useState("");

  const getVideo = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
      );
      // console.log(response.data);
      setVideo(response.data?.items[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getLyric = async () => {
      try {
        const response = await axios.get(
          `https://youtube-mp3-fns.herokuapp.com/api/v1/lyric/?title=${video?.snippet?.title}`
        );
        console.log(response?.data);
        if (
          Object.prototype.toString.call(response?.data?.data) ===
            "[object Object]" &&
          JSON.stringify(response?.data?.data) === "{}"
        ) {
          return setError("Lyric not found");
        }
        setLyric(response?.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getLyric();
  }, [video?.snippet?.title]);

  useEffect(() => {
    const audioUrl = async () => {
      try {
        const response = await axios.get(
          `https://youtube-mp3-fns.herokuapp.com/api/v1/music/?videoId=${id}`
        );
        // console.log(response.data);
        setAudio(response?.data[0].url);
      } catch (error) {
        console.log(error.message);
      }
    };

    audioUrl();
  }, [id]);

  const seconds = moment.duration(video?.contentDetails?.duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  // console.log(video);

  useEffect(() => {
    getVideo();
  }, [id]);

  // console.log(id);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>
          {`Download Lagu ${video?.snippet?.title} MP3 - GRATIS Cepat Mudah`}
        </title>
        <meta
          name="description"
          content={`Download Lagu ${video?.snippet?.title} MP3 Gratis. Download CEPAT dan MUDAH. Download lagu terbaru, gudang lagu Mp3 gratis terbaik.`}
        />
        <meta
          name="keyword"
          content={`Download Lagu ${video?.snippet?.title} MP3 Gratis. Download CEPAT dan MUDAH. Download lagu terbaru, gudang lagu Mp3 gratis terbaik.`}
        />
      </Helmet>
      <div className="px-3 flex flex-col items-center">
        {!loading ? (
          <>
            <h1 className="text-2xl font-semibold mt-5">
              Download Lagu {video?.snippet?.title}
            </h1>
            <div className="mt-5 pl-5">
              <iframe
                rel="nofollow"
                id="ifyt"
                src={`https://www.youtube.com/embed/${video?.id}`}
                allowFullScreen=""
                frameBorder="0"
              ></iframe>
            </div>
            <h2 className="mt-5 font-medium">{video?.snippet?.title}</h2>
            <div className="flex mt-3">
              <p className="text-gray-500 pr-2">
                Listen:{" "}
                <span className="font-medium text-black">
                  {numeral(video?.statistics?.viewCount).format("0,0")}
                </span>
              </p>
              <p className="text-gray-500 pr-1">
                Duration:{" "}
                <span className="font-medium text-black">{_duration}</span>
              </p>
            </div>

            <iframe
              src={`https://y-api.org/button/?v=${video?.id}`}
              width="150px"
              height="40px"
              scrolling="no"
              style={{ border: 0 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 mt-5 cursor-pointer"
            ></iframe>
            <ReactAudioPlayer src={`${audio}`} controls className="mt-2" />
            <h2 className="text-gray-900 text-lg font-semibold mt-5">Lirik</h2>
            <p style={{ whiteSpace: "pre-line" }} className="mt-5">
              {lyric.data ? lyric.data : error}
            </p>
          </>
        ) : (
          <>
            <div className="p-4 w-full">
              <div className="animate-pulse flex space-x-4 justify-center">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-gray-400 rounded w-3/4 mx-auto" />
                  <div className="rounded-md bg-gray-400 h-32 w-48 mx-auto" />
                  <div className="h-4 bg-gray-400 rounded mx-auto" />
                  <div className=" flex space-x-2">
                    <div className="h-4 bg-gray-400 rounded w-5/6 mx-auto" />
                    <div className="h-4 bg-gray-400 rounded w-5/6 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default View;
