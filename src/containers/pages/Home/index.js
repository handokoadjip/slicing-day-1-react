import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Footer,
  Navbar,
  SectionHeader,
  SectionHKOmni,
  SectionOnyxStudi,
  SectionGoPlay,
  SectionAura,
  SectionSoho,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Anggit Yuniar Pradito | Harman Kardon";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionHKOmni />
          <SectionOnyxStudi />
          <SectionGoPlay />
          <SectionAura />
          <SectionSoho />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
