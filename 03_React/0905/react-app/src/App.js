// import { createContext, useContext, useState } from "react";
// import { MyContext } from "./components/context";
// import ChildComponent from "./components/ChildComponent";
// import ParentComponent from "./components/ParentComponent";
// import { ThemeContext } from "./components/ThemeContext";
// import HomeComponent from "./components/HomeComponent";
// import ColorProvider from "./components/ColorProvider";
// import ColorBox from "./components/ColorBox";
// import ColorContext from "./components/ColorContext";
// import Counter from "./features/counter/Counter";

// import { createContext, useContext, useState } from "react";
// import ChildComponent from "./components/ChildComponent";
// import MyContext from "./components/context";
// import ParentComponent from "./components/ParentComponent";
// import { ThemeContext } from "./components/ThemeContext";
// import HomeComponent from "./components/HomeComponent";
// import ColorBox from "./components/ColorBox";
import ColorProvider from "./components/ColorProvider";

// // // Context 객체 생성
// // const MyContext = createContext();

// function App() {
//   // const [darkMode, setDarkMode] = useState(false);
//   // const color = useContext(ColorContext);

//   return (
//     <div>
//       {/* <MyContext.Provider value="Hello World">
//     <ChildComponent />
//     <ParentComponent />
//     </MyContext.Provider> */}

//       {/* <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//     <HomeComponent />
//     </ThemeContext.Provider> */}

//       {/* <ColorProvider /> */}

//       <Counter />
//     </div>
//   );
// }

// export default App;

// 복습

// MyContext 객체 생성
// const MyContext = createContext();

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      {/* <MyContext.Provider value="Hello World">
<GrandParent />
 <ChildComponent />
</MyContext.Provider> */}
      {/* <ChildComponent />
      <ParentComponent /> */}
      {/* <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <HomeComponent />
      </ThemeContext.Provider> */}
      <ColorProvider />
    </div>
  );
}

// function GrandParent() {
//   return <Parent />;
// }

// function Parent() {
//   return <Child />;
// }

// function Child() {
//   return <Message />;
// }

// function Message() {
//   const value = useContext(MyContext);
//   return <div>전달받은 데이터: {value}</div>;
// }

export default App;
