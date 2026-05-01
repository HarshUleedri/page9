const Testimonial = () => {
  const items: { image: string; title: string; description: string }[] = [
    {
      image:
        "https://images.pexels.com/photos/4534653/pexels-photo-4534653.jpeg",
      title: "Sophia Mesof",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/6648539/pexels-photo-6648539.jpeg",
      title: "Glante merio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.pexels.com/photos/5473893/pexels-photo-5473893.jpeg",
      title: "Merona Gomes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl my-28">
      <div className=" lg:w-1/2 ">
        <span className="text-accent border border-accent rounded-full px-4 py-1    font-bold tracking-tight text-base ">
          Testimoial
        </span>
        <h2 className="text-5xl  text-neutral-900 mt-6 mb-4">
          Wellness From Our Thriving Community
        </h2>
        <p className="text-neutral-500 mb-8  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, in
          quisquam accusantium velit quos voluptas eius deleniti illum a est.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
        {items.map((item, idx) => (
          <div className="" key={idx}>
            <div className="rounded-xl overflow-hidden">
              <img
                className="h-80  object-cover w-full"
                src={item.image}
                alt={`yoga-image-${item.title}`}
              />
            </div>
            <div className="space-y-1 p-6 mt-4 bg-accent rounded-xl">
              <h3 className="text-lg text-neutral-100">{item.title}</h3>
              <p className="text-base text-neutral-300 wrap-break-word">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
