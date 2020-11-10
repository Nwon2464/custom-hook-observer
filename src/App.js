import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useIntersect } from "./useIntersect";
//main wrapper that decides the visibility & opacity of the element
//vh is useful for the element that you want to animate.
const MainDiv = styled.div`
  background-color: lightgrey;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(-20px);
  transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
`;

const MainH1 = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

const App = () => {
  const [setRef, visible] = useIntersect({
    threshold: 0.2,
  });
  return (
    <>
      <MainH1>
        <div>Scroll down</div>
        <FaArrowDown color="blue" size="10rem" />
      </MainH1>
      <MainDiv className="App" visible={visible} ref={setRef}>
        <h1>This will appear from opactiy 0 to 1 with animation</h1>
        <h1>This will appear from opactiy 0 to 1 with animation</h1>
        <h1>This will appear from opactiy 0 to 1 with animation</h1>
        <h1>This will appear from opactiy 0 to 1 with animation</h1>
      </MainDiv>
      <MainH1>
        <div>Scroll up</div>
        <FaArrowUp color="blue" size="10rem" />
      </MainH1>
    </>
  );
};
export default App;
