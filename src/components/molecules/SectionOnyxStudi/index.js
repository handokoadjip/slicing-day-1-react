import { Kardon1, Kardon2 } from "assets/source/image";
import { Button } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="bg-gradient-3 position-relative">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row w-100 pt-5">
          <div className="col-lg-12">
            <figure>
              <img
                className="img-fluid pt-5 position-absolute top-50 start-0 translate-middle w-40"
                src={Kardon1}
                alt="front speaker image"
              />
            </figure>
            <div className="wrapper text-black text-center position-absolute top-50 start-50 translate-middle">
              <h2 className="display-6 text-center pb-0 pb-xl-9 mb-4 ff-marcellus">
                Onyx Studio
              </h2>
              <div className="mb-4">
                <p className="text-center text-fade-black-2 fs-5 mb-1">
                  Beautiful sound goes wireless
                </p>
                <p className="text-center text-fade-black-1 fs-6">
                  Sconic, transportable, wireless speaker system
                </p>
              </div>
              <Button
                className="btn btn-custom-2 text-uppercase px-4"
                href="#"
                isCustom2
              >
                buy now
              </Button>
            </div>
            <figure>
              <img
                className="img-fluid pt-5 position-absolute top-50 start-100 translate-middle w-40"
                src={Kardon2}
                alt="behind speaker image"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
