import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col space-y-6">
      <h1 className="text-blue-500 text-9xl">404</h1>
      <p className="font-semibold">Page Not Found</p>
      <Link to="/" className="text-blue-500 text-lg">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
