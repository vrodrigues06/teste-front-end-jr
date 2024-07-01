import React from "react";
import Logo from "../ui/Logo";
import IconsNavigation from "./IconsNavigation";
import SearchBar from "./SearchBar";

const TopNavigation = () => {
  return (
    <div className="navigationWrapper">
      <Logo />
      <SearchBar />
      <IconsNavigation />
    </div>
  );
};

export default TopNavigation;
