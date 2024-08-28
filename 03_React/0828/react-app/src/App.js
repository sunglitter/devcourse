import "./App.css";
// import BooleanComponent from "./components/BooleanComponent";
// import DefaultProps from "./components/DefaultProps";
// import FoodMenu from "./components/FoodMenu";
// import Wrapper from "./components/Wrapper";
// import HeaderComponent from "./components/HeaderComponent";
// import BodyComponent from "./components/BodyComponent";
// import FooterComponent from "./components/FooterComponent";
// import IntroductionComponents from "./components/IntroductionComponents";
// import ChildComponent from "./components/ChildComponent";
import PropTypesComponents from "./components/PropTypesComponents";

function App() {
  return (
    <div>
      {/* <FoodMenu
        className="FoodList"
        img="https://therecipecritic.com/wp-content/uploads/2018/04/pasta-carbonara-15.jpg"
        imgAlt="Carbonara Pasta"
        name="Carbonara"
        genre="Pasta"
        price="15,000"
      />
      <FoodMenu
        img="https://images.ricardocuisine.com/services/recipes/pizza-1498148703.jpg"
        imgAlt="Margherita Pizza"
        name="Margherita"
        genre="Pizza"
        price="25,000"
      />
      <FoodMenu
        img="https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/grilled-rib-eye-steaks-617b7f.jpg"
        imgAlt="Rib Eye Steak"
        name="Rib Eye Steak"
        genre="Steak"
        price="50,000"
      /> */}

      {/* <BooleanComponent study />
      <BooleanComponent /> */}

      {/* <Wrapper>
        여기처럼 부모 컴포넌트 안에 자식 컴포넌트를 넣을 경우 html이 아닌 component의 관계(HTML (X), React (O))이므로
                    부모 컴포넌트에 children을 추가해줘야 자식 컴포넌트를 받아올 수 있음 
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </Wrapper> */}

      {/* <IntroductionComponents
        age={20}
        address="서울"
        nameColor="blue"
        ageColor="orange"
        addressColor="green"
      /> */}
      {/* <ChildComponent>리액트</ChildComponent> */}
      <PropTypesComponents item="사탕" price={1000} />
    </div>
  );
}

export default App;
