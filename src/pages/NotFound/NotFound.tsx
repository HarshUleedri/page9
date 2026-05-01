import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen  flex  flex-col gap-4 items-center justify-center text-2xl font-semibold">
      <p> NotFound</p>
      <Link to={"/"}>
        <button className="px-4 py-1 rounded bg-neutral-800 text-neutral-50 cursor-pointer  text-sm">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
