const WhatWeDo = () => {
  const items: { image: string; title: string; description: string }[] = [
    {
      image:
        "https://images.pexels.com/photos/4534653/pexels-photo-4534653.jpeg",
      title: "Yoga",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/6648539/pexels-photo-6648539.jpeg",
      title: "Meditation",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/5473893/pexels-photo-5473893.jpeg",
      title: "Pilates",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/8436429/pexels-photo-8436429.jpeg",
      title: "Guide Programs",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="max-w-7xl min-h-screen mx-auto space-y-14 my-28 text-center ">
      <div className="lg:w-7/12 mx-auto ">
        <span className="text-accent border border-accent rounded-full px-4 py-1    font-bold tracking-tight text-base ">
          What We Do
        </span>
        <h2 className="text-5xl  text-neutral-900 mt-6 mb-4">
          Your Health Partner
        </h2>
        <p className="text-neutral-500 mb-8  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, in
          quisquam accusantium velit quos voluptas eius deleniti illum a est.
        </p>
        <button className="bg-accent text-neutral-100 px-6 rounded-full text-base py-2">
          See All Courses
        </button>
      </div>
      <div className="grid grid-cols-4  gap-6">
        {items.map((item, idx) => (
          <div className="rounded-xl bg-neutral-100 text-start overflow-hidden" key={idx}>
            <div>
              <img className="h-80  object-cover w-full" src={item.image} alt={`yoga-image-${item.title}`} />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="text-2xl text-neutral-900">{item.title}</h3>
              <p className="text-sm text-neutral-500 wrap-break-word">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
