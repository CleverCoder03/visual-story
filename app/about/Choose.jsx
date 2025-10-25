const reasons = [
  {
    id: "01",
    title: "Artistic Vision",
    desc: "Every shot is composed with an artist's eye for detail, light, and emotion.",
  },
  {
    id: "02",
    title: "Professional Team",
    desc: "An experienced and dedicated team ensuring comprehensive coverage of your event.",
  },
  {
    id: "03",
    title: "Timeless Quality",
    desc: "We deliver high-resolution, beautifully edited images and videos that you will cherish for generations.",
  },
];

const Choose = () => {
  return (
    <div className="pt-15 lg:pt-20">
      <div className="text-pink-600 text-center [&>h1]:text-3xl lg:[&>h1]:text-4xl [&>h1]:font-serif font-semibold">
        <h1>Why choose us?</h1>
      </div>
      <div className="pt-10 lg:pt-15 flex flex-col gap-5">
        {reasons.map((reason) => (
          <div key={reason.id} className="bg-white shadow-md rounded-md flex gap-5 py-4 px-2 ">
            <div className="text-pink-600 font-sans text-xl lg:text-2xl font-bold">
              {reason.id}.
            </div>
            <div>
              <h1 className="text-pink-600 font-sans text-xl lg:text-2xl font-bold">
                {reason.title}
              </h1>
              <p className="mt-4 lg:mt-6">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
