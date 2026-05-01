const Programs = () => {
  const items: { image: string; title: string; description: string }[] = [
    {
      image:
        "https://images.pexels.com/photos/6648539/pexels-photo-6648539.jpeg",
      title: "14-Day Beginner Yoga Journey",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/4534653/pexels-photo-4534653.jpeg",
      title: "30-Day Flexibility Challenge ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/5473893/pexels-photo-5473893.jpeg",
      title: "Core Strength Yoga Program",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl my-28">
      <div className="lg:w-7/12 mx-auto mb-16 text-center">
        <span className="text-accent border border-accent rounded-full px-4 py-1    font-bold tracking-tight text-base ">
          Programs
        </span>
        <h2 className="text-5xl  text-neutral-900 mt-6 mb-4">
          Join Guided Programs and Challenges
        </h2>
        <p className="text-neutral-500 mb-8  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, in
          quisquam accusantium velit quos voluptas eius deleniti illum a est.
        </p>
      </div>
      <div className="grid grid-cols-3  gap-6">
        {items.map((item, idx) => (
          <div
            className="rounded-xl bg-neutral-100 text-start overflow-hidden"
            key={idx}
          >
            <div className="relative h-105">
              <img
                className="h-full  object-cover w-full"
                src={item.image}
                alt={`yoga-image-${item.title}`}
              />
              <div className=" absolute inset-0 bg-black/30 z-0 backdrop-blur-[1px] " />

              <div className="space-y-1 p-4 absolute bottom-6">
                <h3 className="text-2xl text-neutral-100">{item.title}</h3>
                <p className="text-sm text-neutral-200 wrap-break-word">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
