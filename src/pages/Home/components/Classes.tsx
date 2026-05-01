const Classes = () => {
  const items: { icon: React.ReactNode; title: string; description: string }[] =
    [
      {
        icon: (
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
            className="lucide  lucide-flower-icon lucide-flower"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
            <path d="M12 7.5V9" />
            <path d="M7.5 12H9" />
            <path d="M16.5 12H15" />
            <path d="M12 16.5V15" />
            <path d="m8 8 1.88 1.88" />
            <path d="M14.12 9.88 16 8" />
            <path d="m8 16 1.88-1.88" />
            <path d="M14.12 14.12 16 16" />
          </svg>
        ),
        title: "Styles Tailored For You",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: (
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
            className="lucide lucide-map-pinned-icon lucide-map-pinned"
          >
            <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
            <circle cx="12" cy="8" r="2" />
            <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
          </svg>
        ),
        title: "Yoga Anytime, Anywhere",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: (
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
            className="lucide lucide-brain-icon lucide-brain"
          >
            <path d="M12 18V5" />
            <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
            <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
            <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
            <path d="M18 18a4 4 0 0 0 2-7.464" />
            <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
            <path d="M6 18a4 4 0 0 1-2-7.464" />
            <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
          </svg>
        ),
        title: "Expert Instructors",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: (
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
            className="lucide lucide-line-squiggle-icon lucide-line-squiggle"
          >
            <path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" />
          </svg>
        ),
        title: "Flexibility On The Go",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ];

  return (
    <section className="w-full relative min-h-screen bg-[url('https://images.pexels.com/photos/8436608/pexels-photo-8436608.jpeg')] py-28  bg-cover bg-top bg-no-repeat ">
      <div className=" absolute inset-0 bg-black/40 z-0 backdrop-blur-[1px] " />
      <div className=" max-w-7xl   mx-auto relative  ">
        <div className="lg:w-7/12 lg:pb-20">
          <span className="text-neutral-100 border border-neutral-100 rounded-full px-4 py-1    font-bold tracking-tight text-base ">
            Classes
          </span>
          <h2 className="text-5xl lg:w-3/4  text-neutral-100 mt-6 mb-4">
            Classes For Every Level and Intention
          </h2>
          <p className="text-neutral-200 mb-8  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, in
            quisquam accusantium velit quos voluptas eius deleniti illum a est.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-neutral-100 p-6 rounded-xl">
              <div className=" inline-block p-2 rounded-md border border-neutral-300 text-neutral-600">
                {item.icon}
              </div>

              <h3 className="text-xl mt-8 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
