import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";
import "./HomeComponent.scss";

const HomeComponent = () => {
  const data = useContext(ThemeContext);
  console.log(data);

  return (
    <div className="container">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
