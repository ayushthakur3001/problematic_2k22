import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import Timer from "./components/Timer"
import Container from "./components/Container";
import PollContext from "./store/prob-context";
import Header from "./components/Header/Header";
import BtnContainer from "./components/BtnContainer/BtnContainer";
import ImageContainer from "./components/ImageContainer/ImageContainer";

const App = () => {
  const ctx = useContext(PollContext);
  return (
    <div className='app' >

      {
        ctx.currentProblem < 1 &&
        <>
          <Header />
          <ImageContainer />
        </>
      }

      {
        ctx.currentProblem >= 1 &&
        <>
          <div className="puzzle-container" >
            <Container />
            <Timer />
          </div>
        </>
      }





    </div>
  )
}

export default App


