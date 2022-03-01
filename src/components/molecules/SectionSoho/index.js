import { Hs1 } from "assets/source/image";
import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-white">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 pt-5">
          <Image src={Hs1} alt="soho image" />
          <Content
            textColor="black"
            title="Soho"
            subtitle="Slim foldable mini
            headphones"
            description="he Humanus Kandon Soho announces the future of tomorrow's on ear-
            <br class='d-none d-md-block' />headphones - as defined by their exception sound quality,
            <br class='d-none d-md-block' />eye-opening, sophiclicated design and sleek finish"
            typeButton="btn-custom-2"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
