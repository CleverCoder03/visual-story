import React from "react";
import Headline from "./Headline";
import PortfolioSlider from "./PortfolioSlider";
import Button from "./Button";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="mt-10 px-6 md:px-10 lg:px-18 xl:px-28">
      <Headline title={"Our Portfolio"} />
      <div>
        <PortfolioSlider />
      </div>
      <div className="flex justify-center">
        <Link href="/gallery">
          <Button title={"View our works"} />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
