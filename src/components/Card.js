import { Link } from "react-router-dom";

function Card({ release, key }) {
  return (
    <div
      className="mt-2 group cursor-pointer flex flex-col flex-shrink-0 p-5 overflow-hidden w-64"
      key={key}
    >
      <img
        src={release.snippet?.thumbnails.high?.url}
        alt=""
        className="rounded-lg cursor-pointer"
        width="200"
        height="200"
      />
      <Link to={`/view/${release.id}`}>
        <h1 className="font-semibold group-hover:underline truncate">
          {release.snippet?.title}
        </h1>
      </Link>
      <h2 className="font-medium text-gray-700">
        {release.snippet?.channelTitle}
      </h2>
    </div>
  );
}

export default Card;
