import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-[80vh]  rounded-lg">
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-primary animate-bounce mb-4">
        404
      </h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found.
      </p>
      <p className="text-gray-600 mb-6 max-w-md">
        It seems like you’re lost in the internet cosmos. Let's get you back to
        the homepage!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Back to Home
      </Link>



    </div>
  );
};

export default NotFound;
