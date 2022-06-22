import { Aura } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper text-center d-flex justify-content-center align-content-center position-relative">
              <figure>
                <img
                  className="img-fluid mb-5 mb-lg-0 w-40 w-xxl-40 pt-5"
                  src={Aura}
                  alt="aura image"
                />
              </figure>
              <h1 className="display-3 pb-0 pb-xl-9 position-absolute top-50 start-50 translate-middle w-100 ff-marcellus">
                Legacy of Achivement
              </h1>
            </div>
            <p className="fs-4 text-center text-fade-1 leading-relaxed">
              harman kadon delivers beautiful sound b combining unmatched audio
              quality and iconic
              <br className="d-none d-md-block" />
              design to create a work of both art and sound
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
