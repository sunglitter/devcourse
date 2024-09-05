import { createContext } from "react";

// MyContext 목적: "Hello World" 전달
const MyContext = createContext("Default Value");

const ColorContext = createContext();
const ThemeContext = createContext();

export default MyContext;
