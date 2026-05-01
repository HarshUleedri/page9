import ButtonPrimary from "../../../component/ButtonPrimary";

const Hero = () => {
  const numbers: { title: string; number: string }[] = [
    {
      title: "Happy Students",
      number: "10,000",
    },
    {
      title: "Classes Streamed Monthly",
      number: "5,000+",
    },
    {
      title: "Member Satisfaction",
      number: "95%",
    },
  ];

  return (
    <section className="w-full relative h-screen bg-[url('https://images.pexels.com/photos/36993247/pexels-photo-36993247.jpeg')] bg-cover bg-center lg:px-26 lg:pt-26">
      <div className=" absolute inset-0 bg-black/50 z-0 backdrop-blur-[1px] " />

      <div className="relative  mx-auto max-w-7xl flex lg:h-10/12 justify-between  text-neutral-100 lg:mt-12 ">
        <div className="lg:w-1/2">
          <h1 className="mb-4 lg:text-7xl ">
            Flow into ___ Peace One Pose at a Time{" "}
          </h1>
          <p className="lg:text-lg text-neutral-200 font-light mb-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            dolore molestias harum nam ratione debitis quo!
          </p>
          <ButtonPrimary text="Try 14 Days Free Demo" link="#" />
        </div>
        <div className="self-end flex items-center divide-x-2">
          {numbers.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 items-start px-6 ">
              <span className="font-bold text-neutral-100 text-4xl">
                {item.number}
              </span>
              <span className="text-base text-neutral-100/60 font-semibold">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
