import Headline from "../components/Headline";

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
      <Headline title={"Why choose us?"} />
      <div className="pt-10 flex flex-col lg:flex-row gap-5 lg:gap-10">
        {reasons.map((reason) => (
          <div key={reason.id} className="bg-white shadow-md rounded-md flex gap-5 py-4 px-2 lg:px-4 lg:py-6 lg:w-1/3">
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
