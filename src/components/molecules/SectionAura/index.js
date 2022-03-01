import { AuraWhite } from "assets/source/image";
import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-gradient-5">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 pt-5">
          <Content
            className="order-1 order-lg-0"
            textColor="black"
            title="Aura"
            subtitle="Wireless Home Speaker"
            description="Delivers beautiful sound by combining unmathced quality <br className='d-none d-md-block' />
            and iconic design to create a work of both art and sound"
            typeButton="btn-custom-2"
          />
          <Image
            className="order-0 order-lg-1"
            src={AuraWhite}
            alt="aura image"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
