import { Omni } from "assets/source/image";
import { Button } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-gradient-2">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 pt-5">
          <div className="col-lg-12 order-1 order-lg-0 pt-lg-5">
            <div className="wrapper text-center mb-5">
              <h2 className="display-6 pb-0 pb-xl-9 mb-4 ff-marcellus">
                HK Omni 20
              </h2>
              <div className="mb-4">
                <p className=" text-fade-2 fs-5 mb-1">
                  Enjoy beautiful sound from room to room wirelessly
                </p>
                <p className=" text-fade-1 fs-6">
                  A more powerful speaker for superior sound and performance in
                  larger rooms.
                </p>
              </div>
              <Button href="#" isCustom1>
                buy now
              </Button>
            </div>
          </div>
          <div className="col-lg-12 order-0 order-lg-1 pt-5 pt-lg-0">
            <figure>
              <img
                className="img-fluid mb-5 mb-lg-0 w-75 w-lg-30 w-xxl-40 d-block mx-auto"
                src={Omni}
                alt="hk omni 20 image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
