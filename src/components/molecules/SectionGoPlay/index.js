import { Go } from "assets/source/image";
import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-gradient-4">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 pt-5">
          <Image src={Go} alt="hk go-play image" />
          <Content
            title="HK GO-Play"
            subtitle="SoundSticks Wireless"
            description="Wireless speaker system with
                Bluetooth connectivity"
            typeButton="btn-custom-1"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
