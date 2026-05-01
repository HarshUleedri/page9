import { useNavigate } from "react-router";

const ButtonPrimary = ({ text, link }: { text: string; link: string }) => {
  const navigate = useNavigate();

  const handleOnClick = () => navigate(link);

  return (
    <button onClick={handleOnClick} className="flex  items-center ">
      <span className="bg-neutral-100 rounded-full text-base py-2 whitespace-nowrap  text-neutral-900 font-bold px-6 ">
        {text}
      </span>
      <span className="p-2 relative right-1  rounded-full bg-neutral-100 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right text-neutral-900 size-6 "
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </span>
    </button>
  );
};

export default ButtonPrimary;
