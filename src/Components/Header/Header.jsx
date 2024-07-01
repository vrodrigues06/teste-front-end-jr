import React from "react";
import InfoBar from "./InfoBar";
import TopNavigation from "./TopNavigation";
import SectionsNavigation from "./SectionsNavigation";

const Header = () => {
  return (
    <header className="container">
      <InfoBar />
      <TopNavigation />
      <SectionsNavigation />
    </header>
  );
};

export default Header;
