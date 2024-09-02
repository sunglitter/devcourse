import React from "react";
import styled from "styled-components";

const StyledComponent = () => {
  //   const Title = styled.h1`
  //     font-size: 1.5em;
  //     text-align: center;
  //     color: palevioletred;
  //   `;

  //   const Wrapper = styled.div`
  //     padding: 4em;
  //     background: papayawhip;
  //   `;

  //   const Button = styled.button`
  //     background: ${(props) => (props.primary ? "palevioletred" : "white")};
  //     color: ${(props) => (props.primary ? "white" : "palevioletred")};
  //     font-size: 1rem;
  //     margin: 1em;
  //     padding: 0.25em 1em;
  //     border: 2px solid palevioletred;
  //     border-radius: 3px;
  //   `;

  const Container = styled.div`
    background: black;
    padding: 1rem;

    // 중앙 정렬
    margin: 0 auto;

    // 기본 너비 : 1024px
    width: 1024px;

    // 너비 768px 이하 : 100%
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `;

  const Button = styled.button`
    background: ${(props) => (props.main ? "blue" : "")};
    color: ${(props) => (props.main ? "white" : "black")};
    border: ${(props) => (props.main ? "3px solid yellow" : "")};
    font-size: 1rem;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;

  return (
    <div>
      {/* <Wrapper>
        <Title>안녕하세요</Title>
      </Wrapper> */}

      {/* <Button>Normal</Button>
      <Button primary>Primary</Button> */}

      <Container>
        <Button>버튼1</Button>
        <Button main>버튼2</Button>
      </Container>
    </div>
  );
};

export default StyledComponent;
