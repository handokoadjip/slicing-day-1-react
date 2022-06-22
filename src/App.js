import React, { useState, useEffect } from "react";
import $ from "jquery";

import Home from "containers/pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      function mobileViewUpdate() {
        const viewportWidth = $(window).width();
        viewportWidth <= 768
          ? $(".navbar.fixed-top").addClass("mobile")
          : $(".navbar.fixed-top").removeClass("mobile");
      }

      $(window).on("load", mobileViewUpdate);
      $(window).on("resize", mobileViewUpdate);

      mobileViewUpdate();
    });
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
