import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    "Pop",
    "Dangdut",
    "Melayu",
    "Rock",
    "Campursari",
    "Indie",
    "Reggae",
  ];

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 mt-3">
      {categories.map((category, index) => (
        <Link to={`/search/${category}`}>
          <div
            className="bg-gray-500 px-5 py-2 rounded-md cursor-pointer"
            key={index}
          >
            <h3 className="text-gray-50 font-bold">{category}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
